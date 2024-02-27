<?php

require_once __DIR__ . '/../../Utilities/Php/Router.php';

use \Utilities\Router;

$router = new Router();

?>

<!-- Sidebar -->

<nav class="w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card-2" style="z-index:3;width:250px;margin-top:0px;"
    id="mySidebar">
    <a class="w3-bar-item w3-button w3-border-bottom w3-large" href="https://www.reconext.com/"><img
            src="/Resources/Graphics/logo-teleplan-150x53.png" style="width:80%;"></a>
    <a class="w3-bar-item w3-button w3-hide-large w3-large" href="javascript:void(0)" onclick="w3_close()">Close <i
            class="fa fa-remove"></i></a>
    <a class="w3-bar-item w3-button " href="/home.php" id="home">Home</a>
    <!-- <a class="w3-bar-item w3-button " href="e_dashboard.php">DASHBOARD</a> -->
    <div>
        <a class="w3-bar-item w3-button"> Documents - Program <i class="fa fa-caret-down"></i> </a>
        <div id="item-0" class="w3-hide link-group">

        </div>
    </div>
    <div>
        <a class="w3-bar-item w3-button"> Documents - IMS <i class="fa fa-caret-down"></i> </a>
        <div id="item-1" class="w3-hide link-group">

        </div>
    </div>
    <!-- <div>
        <a class="w3-bar-item w3-button">Procedures <i class="fa fa-caret-down"></i></a>
        <div id="item13" class="w3-hide link-group">
            <a class="w3-bar-item w3-button" href="procedures.php?data=ims">Integrated Management System</a>
            <a class="w3-bar-item w3-button" href="procedures.php?data=isms">Information Security & Business
                Continuity</a>
        </div>
    </div> -->

    <?php if ($router->checkLogPrivileges('moderator')) { ?>
        <a class="w3-bar-item w3-button" href="/q_toolbox/pl/">
            Quality toolbox
        </a>
    <?php } ?>
</nav>

<script type="module">
    import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";

    const makeItToggle = (itemId) => {
        const sidebar = document.querySelector('#mySidebar');
        const toggleable = sidebar.querySelector(`#item-${itemId}`);

        toggleable.previousElementSibling.addEventListener('click', function () {
            toggleable.classList.toggle('w3-show');
            toggleable.classList.toggle('w3-hide');
        });
    };

    const capitalize = (str) => {
        return str.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };

    // Documents - Programs
    new HttpRequest(`/Controllers/Programs/programs.php`)
        .send()
        .then(response => {
            const data = response.data;

            if (data) {
                const menu = [];

                data.forEach(id => {
                    const template = `<a class="w3-bar-item w3-button" href="/documents.php?category=program&name=${id.program_name}&getArchive=0" style="padding-left: 32px;">${capitalize(id.program_name)}</a>`

                    if (id.program_name === 'common') {
                        menu.unshift(template);
                    } else {
                        menu.push(template);
                    }

                });

                document.querySelector("#item-0").innerHTML = menu.join("");
                makeItToggle('0')
            }
        }).catch(error => {
            console.error(error);
        });

    // Documents - IMS
    new HttpRequest(`/Controllers/IMS/categories.php`)
        .send()
        .then(response => {
            const data = response.data;

            if (data) {
                const menu = [];

                data.forEach(id => {
                    const template = `<a class="w3-bar-item w3-button" href="/documents.php?category=ims&name=${id.category_name}&getArchive=0" style="padding-left: 32px;">${capitalize(id.category_name)}</a>`

                    menu.push(template);
                });

                document.querySelector("#item-1").innerHTML = menu.join("");
                makeItToggle('1')
            }
        }).catch(error => {
            console.error(error);
        });


</script>