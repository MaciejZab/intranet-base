<?php

declare(strict_types=1);
namespace User;

require_once __DIR__ . "/../../Utilities/Php/SessionManager.php";
require_once __DIR__ . "/../Database/DbConn.php";
require_once __DIR__ . "/User.php";
require_once __DIR__ . "/ILog.php";

use \Utilities\SessionManager;
use \Database\DbConn;

class LogUser extends User implements ILog
{
    public function logIn(string $username, ?string $password): void
    {
        $legalUsers = ['admin', 'moderator', 'operator'];

        if (in_array($username, $legalUsers) && $password) {
            $result = null;

            $conn = new DbConn();
            $conn->selectDb('i_users');
            $sql = "SELECT id, username, email, role, note FROM users WHERE username = ? AND password = ?";
            $stmt = $conn->prepareStmt($sql);

            // md5 is already in use => adopt a more secure algorithm in the future
            $params = [$username, md5($password)];
            $stmt->executeStmt($params);
            $result = $stmt->fetchOne();

            if ($result) {
                $sessionArray = SessionManager::get_SESSION();
                $sessionArray['user_logged'] = 1;

                foreach ($result as $key => $value) {
                    $this->$key = $result[$key];
                    $sessionArray["user_$key"] = $value;
                }

                SessionManager::set_SESSION($sessionArray);
            }
        } else if ($username === "operator" && $password === null) {
            $sessionArray = SessionManager::get_SESSION();

            $sessionArray['user_logged'] = 1;
            $sessionArray["user_role"] = "operator";

            SessionManager::set_SESSION($sessionArray);
        }
    }
    public function logOut(): void
    {
        SessionManager::destroySession();
    }
}