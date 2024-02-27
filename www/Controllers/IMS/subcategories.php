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
            $sql = "INSERT INTO ims_subcategories (	category_id, subcategory_name) VALUES (?, ?)";
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
        $sql = "DELETE FROM ims_subcategories WHERE id = ?";
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

        $subcategory = isset($_GET["name"]) ? $_GET["name"] : null;
        $all = isset($_GET["all"]) ? $_GET["all"] === "true" : false;

        // Perform get logic
        $conn = new DbConn();
        $conn->selectDb('ims');
        $sql = "";
        if ($all) {
            $sql = "SELECT id, category_id, subcategory_name 
                FROM ims_subcategories
                ORDER BY id";
        } else {
            $sql = "SELECT ims_subcategories.id, ims_subcategories.category_id, ims_subcategories.subcategory_name 
                FROM ims_subcategories 
                INNER JOIN ims_categories ON ims_subcategories.category_id = ims_categories.id
                WHERE ims_categories.category_name = ?
                ORDER BY ims_subcategories.id";
        }
        $stmt = $conn->prepareStmt($sql);
        $params = [];
        if ($subcategory) {
            $params = [$subcategory];
        }
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