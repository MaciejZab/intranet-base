<?php
require_once __DIR__ . "/../Models/Database/DbConn.php";
use \Database\DbConn;

if (empty($_GET['key'])) {
    exit;
} else {
    $key = $_GET['key'];

    // Simple decryption function
    function decrypt($string)
    {
        $decrypted = '';
        $length = strlen($string);

        // Loop through each character in the string
        for ($i = 0; $i < $length; $i++) {
            // Reverse the shift applied during encryption
            $decrypted .= chr(ord($string[$i]) - 1);
        }

        return $decrypted;
    }

    $decrypted = decrypt($key);

    $parts = explode("/", $decrypted);
    $index = pathinfo($parts[4], PATHINFO_FILENAME);

    $conn = null;

    switch ($parts[3]) {
        case 'Program':
            $conn = new DbConn();
            $conn->selectDb('programs');

            break;
        case 'IMS':
            $conn = new DbConn();
            $conn->selectDb('ims');

            break;
    }

    $sql = "SELECT doc_name FROM documents WHERE id = ?";
    $stmt = $conn->prepareStmt($sql);
    $params = [$index];
    $stmt->executeStmt($params);
    $result = $stmt->fetchOne();

    $docName = $result['doc_name'];

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $docName ?>
    </title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
    <style>
        #pdf-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <div id="pdf-container"></div>

    <script>

        // Initialize PDF.js
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

        // Function to display PDF from URL or local path
        function displayPdf(pdfPath) {
            // Clear previous content
            const pdfContainer = document.getElementById('pdf-container');
            pdfContainer.innerHTML = '';

            // Load PDF
            pdfjsLib.getDocument(pdfPath).promise.then(function (pdf) {
                // Display all pages
                for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                    pdf.getPage(pageNumber).then(function (page) {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        const viewport = page.getViewport({ scale: 1.5 });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        pdfContainer.appendChild(canvas);

                        // Render PDF page on the canvas
                        page.render({
                            canvasContext: context,
                            viewport: viewport
                        });
                    });
                }
            });
        }

        // Display a PDF file
        displayPdf(JSON.parse('<?= json_encode($decrypted) ?>'));

        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });
    </script>
</body>

</html>