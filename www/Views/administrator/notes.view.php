<?php

require_once __DIR__ . '/../Partials/navbarTop.php';

?>

<div class="w3-container w3-padding-8" style="padding-left:32px;">

    <div class="w3-container">
        <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
            Notes
        </h2>
        <?php

        require_once __DIR__ . '/../Partials/Tables/generateTable.php';

        generateTable('notes');

        ?>
    </div>

    <div class="w3-container">
        <hr>
    </div>

    <?php

    require_once __DIR__ . '/../../Views/Partials/Forms/Form.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/TextInput.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/NumberInput.php';

    use Forms\Form;
    use Forms\TextInput;
    use Forms\NumberInput;

    $form = new Form('Add new note', 'Save');
    $form->addElements([
        new TextInput('Note Title'),
        new TextInput('Note Description'),
        new TextInput('Note Link'),
    ]);
    $sendKeys = ['title', 'desc', 'link'];
    $form->render()->attachSubmitHandler($sendKeys, '/Controllers/notes.php', 'POST');

    $form = new Form('Delete note', 'Delete');
    $form->addElements([
        new NumberInput('Note No'),
    ]);
    $sendKeys = ['id'];
    $form->render()->attachSubmitHandler($sendKeys, '/Controllers/notes.php', 'DELETE');

    ?>

</div>