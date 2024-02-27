<?php

require_once __DIR__ . "/../../../Utilities/Php/SessionManager.php";

use \Utilities\SessionManager;

$sessionArray = SessionManager::get_SESSION();

if (isset($_GET['category'])) {
    $category = $_GET['category'];
}

if (isset($_GET['name'])) {
    $name = $_GET['name'];
}

?>

<div class="w3-container w3-padding-8" style="padding-left:32px;">

    <div class="w3-row">

        <div class="w3-container">
            <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
                <?php echo ucfirst($name) ?>
            </h2>
        </div>

        <div class="w3-row-padding w3-col m4 l3 w3-right w3-text-dark-grey">
            <div class="w3-row w3-section">

                <div class="w3-col search">
                    <span class="fa fa-search"></span>
                    <input class="w3-input w3-border" id="search_doc_description" name="search_doc_description"
                        type="text" placeholder="Doc description">
                </div>

            </div>
        </div>

        <div class="w3-row-padding w3-col m4 l2 w3-right w3-text-dark-grey">
            <div class="w3-row w3-section">
                <div class="w3-col search">
                    <span class="fa fa-search"></span>
                    <input class="w3-input w3-border" id="search_document" name="search_document" type="text"
                        placeholder="Doc name">
                </div>
            </div>
        </div>

        <div class="w3-row-padding w3-col m4 l3 w3-right w3-text-dark-grey">

            <div>
                <?php ?>
            </div>

            <div class="w3-row w3-section">

                <div class="w3-col search styled-select">
                    <!-- <input class=" w3-input w3-border" id="search_doc_description" name="search_doc_description"
                type="text" placeholder="Doc Category" onkeypress="return runScriptSearchDocDesc(event, '')"> -->



                    <select class="w3-input w3-border" id="search_doc_category" name="search_doc_category"
                        style="height: 42.17px;">
                    </select>

                    <script type='module'>
                        import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";
                        import { SelectOptions } from "/Utilities/Javascript/Categories/SelectOptions.js";

                        const select = document.querySelector('#search_doc_category');

                        const url = window.location.href;
                        const urlParts = url.split("?");
                        const queryString = urlParts[1];

                        const params = new URLSearchParams(queryString);
                        const category = params.get('category');

                        let controller = null;
                        let options = null;

                        switch (category) {
                            case 'program':
                                controller = 'Programs/categories.php';
                                break;
                            case 'ims':
                                controller = 'IMS/subcategories.php';
                                break;

                            default:
                                break;
                        }

                        if (!controller) throw new Error('No category in query string params');

                        const requestUrl = `/Controllers/${controller}?${queryString}`;
                        const request = new HttpRequest(requestUrl);
                        request.send().then(response => {
                            const data = response.data;

                            switch (category) {
                                case 'program':
                                    options = [data];
                                    break;
                                case 'ims':
                                    options = [null, data];
                                    break;

                                default:
                                    break;
                            }

                            new SelectOptions(...options).generateSelectBody().mount('#search_doc_category').addStylingEvent();
                        }).catch(error => {
                            console.error(error);
                        });

                    </script>

                    <style>
                        .styled-select select {
                            -moz-appearance: none;
                            /* Firefox */
                            -webkit-appearance: none;
                            /* Safari and Chrome */
                            appearance: none;
                        }
                    </style>
                </div>

            </div>
        </div>
    </div>

    <div class="w3-container">
        <hr>
    </div>



    <?php



    require_once __DIR__ . '/../../../Utilities/Php/Router.php';

    use \Utilities\Router;

    $router = new Router();
    if ($router->checkLogPrivileges('moderator')) {
        echo '<div class="w3-container">';
        echo '<a type="button" class="w3-button w3-section w3-padding w3-right bg-reconext-light-blue bg-reconext-blue-hover color-reconext-white-hover " href="administrator/documents.php?' . str_replace('getArchive=0', 'getArchive=1', $_SERVER['QUERY_STRING']) . '"><i class="w3-large fa fa-edit"></i> Add/edit documents</a>';
        echo '</div>';
    }

    ?>