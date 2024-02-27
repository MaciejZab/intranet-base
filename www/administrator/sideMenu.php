<?php

//?name=&data=

declare(strict_types=1);

require_once __DIR__ . '/../Views/Partials/noCacheHeaders.php';

require_once __DIR__ . '/../Utilities/Php/Router.php';

use \Utilities\Router;

$router = new Router();
$router->checkLogStatus();
if (!$router->checkLogPrivileges('moderator')) {
    echo '<script>window.location.href = "/home.php";</script>';
}

?>

<!DOCTYPE html>
<html lang="en">

<?php

require_once __DIR__ . '/../Views/Partials/head.php';

?>

<body>

    <?php

    require_once __DIR__ . '/../Views/Partials/navbarSide.php';

    ?>

    <style>
        body {
            font-family: "Roboto", sans-serif
        }

        .w3-bar-block .w3-bar-item {
            padding: 16px;
            font-weight: bold
        }
    </style>

    <div class="w3-main" style="margin-left:250px;">

        <?php

        $router = new Router();
        $router->requireView();

        require_once __DIR__ . '/../Views/Partials/footer.php'

            ?>

    </div>

</body>

</html>