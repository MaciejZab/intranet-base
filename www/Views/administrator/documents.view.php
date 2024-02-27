<?php
require_once __DIR__ . '/../Partials/navbarTop.php';

if (isset($_GET['name'])) {
    $name = $_GET['name'];
}

$queryString = $_SERVER['QUERY_STRING'];
parse_str($queryString, $params);

if (isset($params['name'])) {
    $name = $params['name'];
}

if (isset($params['category'])) {
    $category = $params['category'];
}

?>

<div class="w3-container w3-padding-8" style="padding-left:32px;">

    <div class="w3-container">
        <h2 class="w3-start w3-text-just-b w3-text-blue-tl">
            <?php echo ucfirst($name) ?>
        </h2>
        <?php

        require_once __DIR__ . '/../../Views/Partials/Tables/generateTable.php';

        // $url = $_SERVER['REQUEST_URI'];
        // $urlParts = explode('?', $url);
        // $queryString = '';
        // // Check if query string exists
        // if (count($urlParts) > 1) {
        //     $queryString = $urlParts[1];
        // }
        
        switch ($category) {
            case 'program':
                generateTable('programs-documents', $queryString);
                break;
            case 'ims':
                generateTable('ims-documents', $queryString);
                break;

            default:
                # code...
                break;
        }



        ?>
    </div>

    <div class="w3-container">
        <hr>
    </div>

    <?php

    require_once __DIR__ . '/../../Views/Partials/Forms/Form.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/FileInput.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/TextInput.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/SelectInput.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/NumberInput.php';
    require_once __DIR__ . '/../../Views/Partials/Forms/Inputs/ChecksInput.php';

    use Forms\Form;
    use Forms\FileInput;
    use Forms\TextInput;
    use Forms\SelectInput;
    use Forms\NumberInput;
    use Forms\ChecksInput;

    $selectInputEndpoint;
    $selectInputCategory;
    $formEndpoint;

    switch ($category) {
        case 'program':
            # code...
            $selectInputEndpoint = '/Controllers/Programs/categories.php?' . $queryString;
            $formEndpoint = '/Controllers/Programs/documents.php';
            break;
        case 'ims':
            # code...
            $selectInputEndpoint = '/Controllers/IMS/subcategories.php?' . $queryString;
            $formEndpoint = '/Controllers/IMS/documents.php';
            break;

        default:
            # code...
            exit;
    }



    $form = new Form('Add new document', 'Upload');
    $form->addElements([
        new FileInput(),
        new TextInput('Document Name'),
        new SelectInput('', $selectInputEndpoint),
        new TextInput('Document Description'),
        new NumberInput('Revision No'),
        new ChecksInput('Polish (PL)&English (EN)&Ukrainian (UA)')
    ]);
    $sendKeys = ['_file', 'name', 'cat', 'desc', 'rev', ['PL', 'EU', 'AU']];
    $form->render()->attachSubmitHandler($sendKeys, $formEndpoint, 'POST');



    $form = new Form('Update document', 'Update');
    $form->addElements([
        new FileInput(),
        new NumberInput('Document No'),
        new TextInput('Document Name'),
        new SelectInput('', $selectInputEndpoint),
        new TextInput('Document Description'),
        new NumberInput('Revision No'),
        new ChecksInput('Polish (PL)&English (EN)&Ukrainian (UA)')
    ]);
    $sendKeys = ['_file', 'id', 'name', 'cat', 'desc', 'rev', ['PL', 'EU', 'AU']];
    $form->render()->attachSubmitHandler($sendKeys, $formEndpoint, 'PUT');



    $form = new Form('Delete document', 'Delete');
    $form->addElements([
        new NumberInput('Document No'),
    ]);
    $sendKeys = ['id'];
    $form->render()->attachSubmitHandler($sendKeys, $formEndpoint, 'DELETE');

    ?>

</div>