<?php

// Example usage:
// require_once __DIR__ . '/Tables/generateTable.php';
// $url = $_SERVER['REQUEST_URI'];
// $urlParts = explode('?', $url);
// $queryString = '';
// // Check if query string exists
// if (count($urlParts) > 1) {
//     $queryString = $urlParts[1];
// }
// generateTable('programs-documents', $queryString);

declare(strict_types=1);


function generateTable(string $table, string $queryString = ''): void
{
    $requestUri = null;
    $tableHeaders = null;
    $tableId = null;
    $excludeKeys = null;

    switch ($table) {
        case 'programs-documents':
            $requestUri = '/Controllers/Programs/documents.php?' . $queryString;
            $tableHeaders = ['Doc No', 'Doc Name', 'Doc Category', 'Doc Description', 'Revision No', '&nbsp;PL', '&nbsp;EN', '&nbsp;UA'];
            $tableId = 'documentsTable';
            $excludeKeys = ['archive', 'program_id', 'doc_attachment'];
            break;
        case 'notes':
            $requestUri = '/Controllers/notes.php';
            $tableHeaders = ['Note No', 'Note Title', 'Note Description', 'Note link', 'Note Date'];
            $tableId = 'notesTable';
            $excludeKeys = [];
            break;
        case 'programs-categories':
            $requestUri = '/Controllers/Programs/categories.php';
            $tableHeaders = ['Category No', 'Program No', 'Program Category'];
            $tableId = 'categoriesTable';
            $excludeKeys = [];
            break;
        case 'programs':
            $requestUri = '/Controllers/Programs/programs.php';
            $tableHeaders = ['Program No', 'Program Name'];
            $tableId = 'programsTable';
            $excludeKeys = [];
            break;
        case 'ims-categories':
            $requestUri = '/Controllers/IMS/categories.php';
            $tableHeaders = ['IMS Category No', 'IMS Category Name'];
            $tableId = 'imsCatTable';
            $excludeKeys = [];
            break;
        case 'ims-subcategories':
            $requestUri = '/Controllers/IMS/subcategories.php?all=true';
            $tableHeaders = ['IMS Subcategory No', 'IMS Category No', 'IMS Subcategory Name'];
            $tableId = 'imsSubCatTable';
            $excludeKeys = [];
            break;
        case 'ims-documents':
            $requestUri = '/Controllers/IMS/documents.php';
            $tableHeaders = ['Doc No', 'Doc Name', 'Doc Category', 'Doc Description', 'Revision No', '&nbsp;PL', '&nbsp;EN', '&nbsp;UA'];
            $tableId = 'documentsTable';
            $excludeKeys = ['archive', 'ims_category_id', 'ims_subcategory_id', 'doc_attachment'];
            break;
    }

    ?>
    <script type="module">
        import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";
        import { TableList } from "/Utilities/Javascript/Table/TableList.js";

        const request = new HttpRequest(JSON.parse('<?= json_encode($requestUri) ?>'))
        const response = request.send()
        response.then(response => {

            const data = response.data;

            if (data) {
                const formattedData = [];

                if (JSON.parse('<?= json_encode(!empty($excludeKeys)) ?>')) {
                    for (const item of data) {

                        Array.from(JSON.parse('<?= json_encode($excludeKeys) ?>')).forEach(key => {
                            delete item[key];
                        });

                        formattedData.push(item);
                    }
                }

                if (JSON.parse('<?= json_encode(!empty($excludeKeys)) ?>')) {
                    new TableList(formattedData).generateTableBody().mount('#<?= $tableId ?>');
                } else {
                    new TableList(data).generateTableBody().mount('#<?= $tableId ?>');
                }
            } else {
                console.log("table list data is empty")
            }

        }).catch(error => {
            console.error(error);
        });

    </script>



    <div class="table-wrapper">
        <table id="<?= $tableId ?>" class="w3-table w3-bordered">
            <thead>
                <tr class="bg-reconext-blue color-reconext-white">
                    <?php foreach ($tableHeaders as $header): ?>
                        <th>
                            <?= $header ?>
                        </th>
                    <?php endforeach; ?>
                </tr>
            </thead>
            <tbody>
                <!-- table body content goes here -->
            </tbody>
        </table>
    </div>

    <style>
        .table-wrapper {
            display: block;
            width: 100%;
            height: calc(39px + 39.5px * 10);
            overflow-y: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: var(--reconext-blue);
            color: var(--reconext-white);
            position: sticky;
            top: 0;
        }

        th,
        td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
        }

        table:not(.searching) tr:nth-child(even) {
            background-color: var(--reconext-light-blue);
        }

        .display-none {
            display: none;
        }
    </style>


    <?php
}

?>