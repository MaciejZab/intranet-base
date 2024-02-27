<?php

declare(strict_types=1);
namespace Database;

require_once __DIR__ . '/BaseConn.php';
require_once __DIR__ . '/IDbConn.php';

// DOCS: README.md 
class DbConn extends BaseConn implements IDbConn
{
    private object $stmt;

    public function __construct()
    {
        parent::__construct();
        $this->stmt = $this->connection;
    }

    public function __destruct()
    {
        $this->stmt->close();
    }

    public function selectDb($dbName): IDbConn
    {
        $this->stmt->select_db($dbName);

        return $this;
    }

    public function prepareStmt(string $sql): IDbConn
    {
        $this->stmt = $this->stmt->prepare($sql);
        if ($this->stmt === false) {
            throw new DbException('Failed to prepare statement: ' . $this->stmt->error);
        }

        return $this;
    }
    public function executeStmt(array $params = []): IDbConn
    {
        if (count($params) !== 0) {
            $this->stmt->bind_param($this->getParamTypes($params), ...$params);
        }

        $exec = mysqli_stmt_execute($this->stmt);

        if (!$exec) {
            throw new DbException('Failed to execute query: ' . $this->stmt->error);
        }

        return $this;
    }

    private function getParamTypes(array $params): string
    {
        $paramsTypes = "";

        foreach ($params as $param) {
            if (is_int($param)) {
                $paramsTypes .= 'i';
            } elseif (is_string($param)) {
                $paramsTypes .= 's';
            } elseif (is_float($param)) {
                $paramsTypes .= 'd';
            } elseif ($param === null) {
                // count nulls as strings
                $paramsTypes .= 's';
            }
        }

        return $paramsTypes;
    }

    public function fetchOne(): ?array
    {
        $stmt = $this->stmt->get_result();
        if ($stmt->num_rows > 0) {
            $result = $stmt->fetch_assoc();
            return $result;
        } else {
            return null;
        }
    }

    public function fetchAll(): ?array
    {
        $stmt = $this->stmt->get_result();
        if ($stmt->num_rows > 0) {
            $result = [];
            while ($row = $stmt->fetch_assoc()) {
                $result[] = $row;
            }
            return $result;
        } else {
            return null;
        }
    }
}