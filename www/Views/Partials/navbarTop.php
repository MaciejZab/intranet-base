<?php

require_once __DIR__ . "/../../Utilities/Php/SessionManager.php";
require_once __DIR__ . '/../../Utilities/Php/Router.php';

use \Utilities\Router;
use \Utilities\SessionManager;

$router = new Router();

$sessionArray = SessionManager::get_SESSION();

if (isset($sessionArray)) { ?>

    <!-- User -->
    <div class="w3-container w3-bar w3-white w3-right-align w3-xlarge">
        <span
            class="w3-bar-item w3-button w3-right w3-hide-small w3-hide-medium w3-hide-large w3-hover-blue w3-large w3-theme-l1">
            <i class="fa fa-bars"></i>
        </span>

        <?php if (isset($sessionArray['user_logged']) && isset($sessionArray['user_role'])) { ?>
            <div class="w3-dropdown-hover w3-right">
                <button class="w3-button w3-hide-small w3-hide-medium w3-hover-blue-tl">
                    <?php echo $sessionArray['user_role'] ?>
                    <i class="fa fa-user"></i>
                </button>
                <div class="w3-dropdown-content w3-bar-block w3-card-4" style="right:16px">

                    <?php if ($router->checkLogPrivileges('moderator')) { ?>
                        <a href="/administrator/notes.php" class=" w3-button w3-hide-small w3-hide-medium w3-hover-blue-tl">
                            &nbsp;&nbsp; Manage Notes
                        </a>

                        <a href="/administrator/sideMenu.php?content=program"
                            class=" w3-button w3-hide-small w3-hide-medium w3-hover-blue-tl">
                            &nbsp;&nbsp; Manage Side Menu
                        </a>
                    <?php } ?>
                    <form id="logout" name="logout" action="" method="get">
                        <button type="submit" class=" w3-button w3-hide-small w3-hide-medium w3-hover-blue-tl"
                            style="width: 100%;">
                            <i class="fa fa-sign-out"></i>&nbsp;&nbsp; Sign Out
                        </button>
                    </form>

                </div>
            </div>
        <?php } ?>
    </div>

    <script type='module'>
        import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";

        document.querySelector('#logout').addEventListener('submit', (event) => {
            event.preventDefault();

            const requestUrl = `/Controllers/User/log.php`;
            const request = new HttpRequest(requestUrl);
            request.send().then(response => {
                if (response.status === 200) window.location.href = '/';
            });
        });

    </script>

    <!-- Image  -->
    <div class="w3-display-container w3-container-tl">
        <?php
        include_once __DIR__ . '/seasonImage.php';
        ?>
    </div>

<?php } ?>