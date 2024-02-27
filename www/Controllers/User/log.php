<?php

declare(strict_types=1);
namespace Controllers;

require_once __DIR__ . '/../../Models/User/LogUser.php';
require_once __DIR__ . '/../../Utilities/Php/SessionManager.php';

use \User\LogUser;
use \Utilities\SessionManager;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    try {

        $jsonData = file_get_contents('php://input');
        // Decode the JSON data into a PHP associative array
        $data = json_decode($jsonData, true);

        // Perform login actions
        if (isset($data)) {

            $username = $data['username'];
            $password = $data['password'];

            $user = new LogUser();
            $user->logIn($username, $password);

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
                'data' => $data,
            ]);
        }

        echo $responseData;
    }

}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    try {

        // Perform logout actions
        $user = new LogUser();
        $user->logOut();

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
                'status' => 200
            ]);
        }

        echo $responseData;
    }

}