<?php

require_once __DIR__ . '/Partials/navbarTop.php';

?>


<?php

require_once __DIR__ . '/Partials/Tables/filterAndAddDocs.php';

?>

<div class="w3-container">
    <br>
</div>

<div class="w3-container">
    <div class="table_result" id="table_result">
        <?php

        require_once __DIR__ . '/Partials/Tables/generateTable.php';

        $url = $_SERVER['REQUEST_URI'];
        $urlParts = explode('?', $url);
        $queryString = '';
        // Check if query string exists
        if (count($urlParts) > 1) {
            $queryString = $urlParts[1];
        }

        generateTable('programs-documents', $queryString);

        ?>

        <script type="module">
            import { setupEventListeners } from "/Utilities/Javascript/Filter/filterDocuments.js"

            const config = {
                tableId: "#documentsTable",
                docNameTdNthChild: 2,
                docCategoryTdNthChild: 3,
                docDescriptionTdNthChild: 4,
                categorySelectId: "#search_doc_category",
                documentNameId: "#search_document",
                documentDescriptionId: "#search_doc_description",
            };

            setupEventListeners(config);
        </script>
    </div>
</div>

<div class="w3-container">
    <br><br>
</div>
</div>