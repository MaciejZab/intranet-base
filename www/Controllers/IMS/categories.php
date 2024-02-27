<?php

declare(strict_types=1);
namespace Controllers;

require_once __DIR__ . '/../../Utilities/Php/SessionManager.php';
use \Utilities\SessionManager;

require_once __DIR__ . "/../../Models/Database/DbConn.php";
use \Database\DbConn;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    if (isset($data)) {

        try {

            $conn = new DbConn();
            $conn->selectDb('ims');
            $sql = "INSERT INTO ims_categories (category_name) VALUES (?)";
            $stmt = $conn->prepareStmt($sql);
            $params = [$data['name']];
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

}

// delete program 
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    try {

        // Perform deletion logic using $id
        $conn = new DbConn();
        $conn->selectDb('ims');
        $sql = " DELETE FROM ims_categories WHERE id = ?";
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

        // Perform get logic
        $conn = new DbConn();
        $conn->selectDb('ims');
        $sql = "SELECT * FROM ims_categories ORDER BY id";
        $stmt = $conn->prepareStmt($sql);
        $stmt->executeStmt();
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