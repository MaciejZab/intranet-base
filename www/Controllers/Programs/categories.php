<?php

declare(strict_types=1);
namespace Controllers;

require_once __DIR__ . '/../../Utilities/Php/SessionManager.php';
use \Utilities\SessionManager;

require_once __DIR__ . "/../../Models/Database/DbConn.php";
use \Database\DbConn;

// adding program category
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    try {

        $conn = new DbConn();
        $conn->selectDb('programs');
        $sql = "INSERT INTO program_categories (program_id, category_name) VALUES (?, ?)";
        $stmt = $conn->prepareStmt($sql);
        $params = [$data['id'], $data['name']];
        $stmt->executeStmt($params);

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

// delete program category
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    try {

        // Perform deletion logic using $id
        $conn = new DbConn();
        $conn->selectDb('programs');
        $sql = " DELETE FROM program_categories WHERE id = ?";
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
        } else {
            $responseData = json_encode([
                'status' => 200,
                'data' => $data,
            ]);
        }

        echo $responseData;
    }
}

// get programs
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    try {

        $programName = isset($_GET["name"]) ? $_GET["name"] : null;

        // Perform get logic
        $conn = new DbConn();
        $conn->selectDb('programs');

        $sql =

            $programName !== null
            ?
            "SELECT program_categories.id, program_categories.program_id, program_categories.category_name 
        FROM program_categories 
        INNER JOIN programs ON programs.id = program_categories.program_id
        WHERE programs.program_name = ?
        ORDER BY id"
            :
            "SELECT id, program_id, category_name 
        FROM program_categories 
        ORDER BY id";

        $stmt = $conn->prepareStmt($sql);
        $params = $programName !== null ? [$programName] : [];
        $stmt->executeStmt($params);
        $results = $stmt->fetchAll();

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
                'data' => $results,

            ]);
        }

        echo $responseData;
    }

}