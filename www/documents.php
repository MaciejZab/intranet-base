<?php

//?name=&data=

declare(strict_types=1);

require_once __DIR__ . '/Config/errorConfig.php';

require_once __DIR__ . '/Views/Partials/noCacheHeaders.php';

require_once __DIR__ . '/Utilities/Php/Router.php';

use \Utilities\Router;

$router = new Router();
$router->checkLogStatus()->checkLogPrivileges();

?>

<!DOCTYPE html>
<html lang="en" style="min-height: 100vh;">

<?php

require_once __DIR__ . '/Views/Partials/head.php';

?>

<style>
    body {
        font-family: "Roboto", sans-serif
    }

    .w3-bar-block .w3-bar-item {
        padding: 16px;
        font-weight: bold
    }

    .divider {
        flex: 1;
    }
</style>

<body style="min-height: 100vh;">

    <?php

    require_once __DIR__ . '/Views/Partials/navbarSide.php';

    ?>

    <div class="w3-main" style="margin-left:250px; min-height: 100vh; display: flex; flex-direction: column;">

        <?php

        $router->requireView();

        ?>

        <div class="divider"></div>

        <?php

        require_once __DIR__ . '/Views/Partials/footer.php'

            ?>

    </div>

</body>

</html>