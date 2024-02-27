<?php

require_once __DIR__ . '/../Partials/navbarTop.php';

$currentURL = $_SERVER['REQUEST_URI'];
$parsedURL = parse_url($currentURL);

$activeContent = isset($_GET['content']) ? $_GET['content'] : null;


require_once __DIR__ . '/../../Views/Partials/Forms/Form.php';
require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/TextInput.php';
require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/NumberInput.php';

use Forms\Form;
use Forms\TextInput;
use Forms\NumberInput;

?>

<style>
    .nav-elements-same-width {
        display: flex;
    }

    .nav-elements-same-width a {
        flex: 1;
    }
</style>



<div class="w3-container w3-padding-8" style="padding-left:32px;">

    <div class="w3-bar w3-light-grey nav-elements-same-width">
        <a href="<?php echo $parsedURL['path'] ?>?content=program"
            class="w3-bar-item w3-button <?php echo ($activeContent === 'program') ? 'w3-blue-tl' : '' ?>">Program</a>
        <a href="<?php echo $parsedURL['path'] ?>?content=ims"
            class="w3-bar-item w3-button <?php echo ($activeContent === 'ims') ? 'w3-blue-tl' : '' ?>">IMS</a>
    </div>

    <?php if ($activeContent === 'program') { ?>
        <div class="w3-container">
            <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
                Program
            </h2>
            <?php

            require_once __DIR__ . '/../Partials/Tables/generateTable.php';

            generateTable('programs');

            ?>
        </div>

        <div class="w3-container">
            <hr>
        </div>

        <?php

        $form = new Form('Add new program', 'Save');
        $form->addElements([
            new TextInput('Program Name'),
        ]);
        $sendKeys = ['name'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/Programs/programs.php', 'POST');

        $form = new Form('Delete program', 'Delete');
        $form->addElements([
            new NumberInput('Program No'),
        ]);
        $sendKeys = ['id'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/Programs/programs.php', 'DELETE');

        ?>

    </div>

    <div class="w3-container w3-padding-8" style="padding-left:32px;">

        <div class="w3-container">
            <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
                Program Categories
            </h2>
            <?php

            require_once __DIR__ . '/../Partials/Tables/generateTable.php';

            generateTable('programs-categories');

            ?>
        </div>

        <div class="w3-container">
            <hr>
        </div>

        <?php

        $form = new Form('Add new category', 'Save');
        $form->addElements([
            new NumberInput('Program No'),
            new TextInput('Category Name'),
        ]);
        $sendKeys = ['id', 'name'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/Programs/categories.php', 'POST');

        $form = new Form('Delete category', 'Delete');
        $form->addElements([
            new NumberInput('Category No'),
        ]);
        $sendKeys = ['id'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/Programs/categories.php', 'DELETE');

        ?>

    <?php }
    if ($activeContent === 'ims') { ?>

        <div class="w3-container">
            <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
                IMS Categories
            </h2>
            <?php

            require_once __DIR__ . '/../Partials/Tables/generateTable.php';

            generateTable('ims-categories');

            ?>
        </div>

        <div class="w3-container">
            <hr>
        </div>

        <?php

        $form = new Form('Add new IMS category', 'Save');
        $form->addElements([
            new TextInput('IMS Category Name'),
        ]);
        $sendKeys = ['name'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/IMS/categories.php', 'POST');

        $form = new Form('Delete IMS category', 'Delete');
        $form->addElements([
            new NumberInput('IMS category No'),
        ]);
        $sendKeys = ['id'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/IMS/categories.php', 'DELETE');

        ?>


        <div class="w3-container">
            <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
                IMS Subcategories
            </h2>
            <?php

            require_once __DIR__ . '/../Partials/Tables/generateTable.php';

            generateTable('ims-subcategories');

            ?>
        </div>

        <div class="w3-container">
            <hr>
        </div>

        <?php

        $form = new Form('Add new IMS subcategory', 'Save');
        $form->addElements([
            new NumberInput('IMS Category No'),
            new TextInput('IMS subcategory Name'),
        ]);
        $sendKeys = ['id', 'name'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/IMS/subcategories.php', 'POST');

        $form = new Form('Delete IMS subcategory', 'Delete');
        $form->addElements([
            new NumberInput('IMS subcategory No'),
        ]);
        $sendKeys = ['id'];
        $form->render()->attachSubmitHandler($sendKeys, '/Controllers/IMS/subcategories.php', 'DELETE');

        ?>

    <?php } ?>
</div>