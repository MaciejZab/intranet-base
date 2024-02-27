<?php

declare(strict_types=1);

require_once __DIR__ . '/Config/errorConfig.php';

require_once __DIR__ . '/Views/Partials/noCacheHeaders.php';

require_once __DIR__ . '/Utilities/Php/Router.php';

use \Utilities\Router;

$router = new Router();
$router->checkLogStatus();

?>

<!DOCTYPE html>
<html lang="en">

<?php

require_once __DIR__ . '/Views/Partials/head.php';
// require_once __DIR__ . '/Views/Partials/navbarTop.php';

?>

<body>

    <style>
        body,
        h1 {
            font-family: "Roboto", sans-serif
        }

        body,
        html {
            height: 100%
        }

        .bgimg {
            background-image: url('Resources/Graphics/tlp-bckg.png');
            min-height: 100%;
            background-position: center;
            background-size: cover;
        }
    </style>

    <?php

    $router->requireView();

    ?>

</body>

</html>