<?php

declare(strict_types=1);
namespace Controllers;

require_once __DIR__ . '/../../Utilities/Php/SessionManager.php';
use \Utilities\SessionManager;

require_once __DIR__ . "/../../Models/Database/DbConn.php";
use \Database\DbConn;

function updateRevision()
{
    // set archive to 0 for the biggest revision after update
    $conn = new DbConn();
    $conn->selectDb('programs');
    $sql = "UPDATE documents
            SET archive = CASE
                WHEN (doc_name, doc_revision) IN (
                    SELECT doc_name, MAX(doc_revision) AS max_revision
                    FROM (
                        SELECT doc_name, doc_revision
                        FROM documents
                    ) AS derived_table
                    GROUP BY doc_name
                ) THEN 0
                ELSE 1
            END;";
    $stmt = $conn->prepareStmt($sql);
    $params = [];
    $stmt->executeStmt($params);
}

function getMaxId($table)
{
    $maxId = null;
    $conn = new DbConn();
    $conn->selectDb('programs');
    $sql = "SELECT MAX(id) FROM " . $table;
    $stmt = $conn->prepareStmt($sql);
    $stmt->executeStmt();
    $maxId = $stmt->fetchOne();

    return $maxId['MAX(id)'];
}

// Simple encryption function
function encrypt($string)
{
    $encrypted = '';
    $length = strlen($string);

    // Loop through each character in the string
    for ($i = 0; $i < $length; $i++) {
        // Shift each character by a fixed amount (for simplicity)
        $encrypted .= chr(ord($string[$i]) + 1);
    }

    return $encrypted;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_FILES['file'])) {
        if (isset($_GET['name'])) {

            try {
                $jsonData = file_get_contents('php://input');
                // Decode the JSON data into a PHP associative array
                $data = json_decode($jsonData, true);


                // setting doc
                $rev = $data['rev'] < 10 ? str_pad($data['rev'], 2, '0', STR_PAD_LEFT) : $data['rev'];

                $conn = new DbConn();
                $conn->selectDb('programs');
                $sql = "INSERT INTO documents (program_id, doc_name, doc_category, doc_description, doc_revision, doc_attachment, doc_language, archive) 
                                    VALUES (
                                        (SELECT id FROM programs WHERE program_name = ?),
                                        ?, ?, ?, ?, ?, ?, ?
                                    );";
                $stmt = $conn->prepareStmt($sql);
                $params = [$_GET['name'], $data['name'], $data['cat'], $data['desc'], $rev, null, null, 0];
                $stmt->executeStmt($params);


                // updating revision of docs
                updateRevision();


                // setting file save dir
                $folder = '/Uploads/Documents/Program/';
                $docId = getMaxId('documents');
                $ext = '.pdf';

                $sessionArray = SessionManager::get_SESSION();
                $sessionArray['uploadFile'] = $folder . $docId . $ext;
                SessionManager::set_SESSION($sessionArray);

                $encrypted = encrypt($folder . $docId . $ext);
                // setting languages of doc
                $pl = isset($data['PL']) && $data['PL'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
                $eu = isset($data['EU']) && $data['EU'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
                $au = isset($data['AU']) && $data['AU'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
                $langs = 'PL=' . $pl . '&EU=' . $eu . '&AU=' . $au;

                $conn = new DbConn();
                $conn->selectDb('programs');
                $sql = "UPDATE documents SET doc_language = ? WHERE id = ?";
                $stmt = $conn->prepareStmt($sql);
                $params = [$langs, $docId];
                $stmt->executeStmt($params);

            } catch (\Exception $e) {
                $error = $e;
            } finally {
                if (isset($error)) {
                    $responseData = json_encode([
                        'status' => 'error',
                        'error_message' => $error->getMessage(),
                        'rawData' => $jsonData,
                        'data' => $data,

                    ]);
                } else {
                    $responseData = json_encode([
                        'status' => 200,
                        'rawData' => $jsonData,
                        'data' => $data,
                    ]);
                }

                echo $responseData;
            }
        }
    }

    if (isset($_FILES['file'])) {

        try {

            $fileMoved = null;
            $isDIR = null;
            $baseDIR = __DIR__ . '/../..';

            $sessionArray = SessionManager::get_SESSION();
            $fileDIR = $baseDIR . $sessionArray['uploadFile'];
            SessionManager::unsetSessionKey('uploadFile');

            // Check if the temporary file exists before attempting to move it
            if (file_exists($_FILES['file']['tmp_name'])) {
                if (move_uploaded_file($_FILES['file']['tmp_name'], $fileDIR)) {
                    $fileMoved = "Has been uploaded successfully.";
                } else {
                    $fileMoved = "Error uploading file.";
                }
            } else {
                $fileMoved = "Temporary file does not exist.";
            }

        } catch (\Exception $e) {
            $error = $e;
        } finally {
            if (isset($error)) {
                $responseData = json_encode([
                    'status' => 'error',
                    'error_message' => $error->getMessage(),
                ]);
            } else {
                $responseData = json_encode([
                    'status' => 200,
                    'data' => $_POST,
                    'file' => (isset($_FILES['file'])) ? $_FILES['file'] : null,
                    'fileMoved' => $fileMoved,
                ]);
            }

            echo $responseData;
        }
    } else {
        $responseData = json_encode([
            'status' => 'error',
            'fileMoved' => false,
        ]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['name'])) {

        try {
            $program = $_GET['name'];

            $conn = new DbConn();
            $conn->selectDb('programs');
            $sql = "SELECT id FROM programs WHERE program_name = ?";
            $stmt = $conn->prepareStmt($sql);
            $params = [$program];
            $stmt->executeStmt($params);
            $result = $stmt->fetchOne();

            $conn = new DbConn();
            $conn->selectDb('programs');


            $archive = null;
            if (isset($_GET['getArchive'])) {
                $archive = (int) $_GET['getArchive'];
            }

            if ($archive) {
                $sql = "SELECT * FROM documents WHERE program_id = ?";
            } else {
                $sql = "SELECT * FROM documents WHERE program_id = ? AND archive != 1";
            }

            $stmt = $conn->prepareStmt($sql);
            $params = [$result['id']];
            $stmt->executeStmt($params);
            $results = $stmt->fetchAll();

        } catch (\Exception $e) {
            $error = $e;
        } finally {
            if (isset($error)) {
                $responseData = json_encode([
                    'status' => 'error',
                ]);
            } else {
                $responseData = json_encode([
                    'status' => 200,
                    'data' => $results,
                    '$archive' => $archive,
                ]);
            }

            echo $responseData;
        }

    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    if (isset($data) && isset($_GET['name'])) {

        try {

            $programName = $_GET['name'];
            $docId = $data['id'];

            // path of uploaded file
            $basePath = __DIR__ . '/../..';
            $folder = '/Uploads/Documents/Program/';
            $ext = '.pdf';

            $sessionArray = SessionManager::get_SESSION();
            $sessionArray['uploadFile'] = $folder . $docId . $ext;
            SessionManager::set_SESSION($sessionArray);

            $encrypted = encrypt($folder . $docId . $ext);
            // setting languages of doc
            $pl = isset($data['PL']) && $data['PL'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
            $eu = isset($data['EU']) && $data['EU'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
            $au = isset($data['AU']) && $data['AU'] === true ? "/Uploads/reader.php?key=" . $encrypted : "null";
            $langs = 'PL=' . $pl . '&EU=' . $eu . '&AU=' . $au;

            $conn = new DbConn();
            $conn->selectDb('programs');
            $sql = "UPDATE documents SET doc_name = ?, doc_category = ?, doc_description = ?, doc_revision = ?, doc_attachment = ?, doc_language = ? WHERE id = ?";
            $stmt = $conn->prepareStmt($sql);

            $rev = $data['rev'] < 10 ? str_pad($data['rev'], 2, '0', STR_PAD_LEFT) : $data['rev'];

            $params = [$data['name'], $data['cat'], $data['desc'], $rev, null, $langs, $docId];
            $stmt->executeStmt($params);

            // updating revision of docs
            updateRevision();

        } catch (\Exception $e) {
            $error = $e;
        } finally {
            if (isset($error)) {
                $responseData = json_encode([
                    'status' => 'error',
                    'error_message' => $error->getMessage(),
                ]);
            } else {
                $responseData = json_encode([
                    'status' => 200,
                    'data' => $data,
                ]);
            }

            echo $responseData;
        }

    }

}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    try {

        $jsonData = file_get_contents('php://input');
        // Decode the JSON data into a PHP associative array
        $data = json_decode($jsonData, true);

        try {
            $conn = new DbConn();
            $conn->selectDb('programs');
            $sql = "DELETE FROM documents WHERE id = ?";
            $stmt = $conn->prepareStmt($sql);
            $params = [$data['id']];
            $stmt->executeStmt($params);
        } catch (\Exception $e) {
            $error = $e;
        } finally {
            if (isset($error)) {
                $responseData = json_encode([
                    'status' => 'error',
                    'error_message' => $error->getMessage(),
                ]);
                echo $responseData;
            } else {
                $fileStatus = null;
                $baseDIR = __DIR__ . '/../../Uploads/Documents/Program/';
                $ext = '.pdf';
                $fileDIR = $baseDIR . $data['id'] . $ext;

                // Check if the file exists before attempting to remove it
                if (file_exists($fileDIR)) {
                    if (unlink($fileDIR)) {
                        $fileStatus = "File deleted successfully.";
                    } else {
                        $fileStatus = "Error deleting file.";
                    }
                } else {
                    $fileStatus = "File does not exist.";
                }
            }
        }

    } catch (\Exception $e) {
        $error = $e;
    } finally {
        if (isset($error)) {
            $responseData = json_encode([
                'status' => 'error',
                'error_message' => $error->getMessage(),
            ]);
        } else {
            $responseData = json_encode([
                'status' => 200,
                '$fileDIR' => $fileDIR,
                'file' => $fileStatus,
            ]);
        }

        echo $responseData;
    }
}



