<?php

declare(strict_types=1);
namespace Controllers;

require_once __DIR__ . '/../Utilities/Php/SessionManager.php';
use \Utilities\SessionManager;

require_once __DIR__ . "/../Models/Database/DbConn.php";
use \Database\DbConn;

// adding notes 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    try {
        $jsonData = file_get_contents('php://input');
        // Decode the JSON data into a PHP associative array
        $data = json_decode($jsonData, true);

        $conn = new DbConn();
        $conn->selectDb('notes');
        $sql = "INSERT INTO notes (note_title, note_description, note_link, note_date) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepareStmt($sql);
        $link = isset($data['link']) ? $data['link'] : "";
        $params = [$data['title'], $data['desc'], $link, date("Y-m-d")];
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

// get notes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    try {

        // Perform get logic
        $conn = new DbConn();
        $conn->selectDb('notes');
        $sql = "SELECT * FROM notes ORDER BY id DESC";
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

// delete note 
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $jsonData = file_get_contents('php://input');
    // Decode the JSON data into a PHP associative array
    $data = json_decode($jsonData, true);

    try {

        // Perform deletion logic using $id
        $conn = new DbConn();
        $conn->selectDb('notes');
        $sql = " DELETE FROM notes WHERE id = ?";
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
                'data' => $_GET,
            ]);
        }

        echo $responseData;
    }
}