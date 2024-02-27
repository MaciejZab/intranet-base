<?php

declare(strict_types=1);
namespace Database;

require_once __DIR__ . "/../../Config/dbConfig.php";
use \mysqli;

class BaseConn
{
    private string $host;
    private string $username;
    private string $password;
    protected object $connection;

    public function __construct()
    {
        $this->host = DB_HOST;
        $this->username = DB_USERNAME;
        $this->password = DB_PASSWORD;

        $this->connection = new mysqli($this->host, $this->username, $this->password);

        if ($this->connection->connect_error) {
            die('Connect failed: ' . $this->connection->connect_error);
        }
    }

    public function select(string $database): BaseConn
    {
        $this->connection->select_db($database);

        return $this;
    }

    public function return() : mysqli
    {
        return $this->connection;
    }
}

