<?php

declare(strict_types=1);
namespace Database;

interface IDbConn
{
    public function selectDb($dbName): IDbConn;
    public function prepareStmt(string $sql): IDbConn;
    public function executeStmt(array $params = []): IDbConn;
    public function fetchOne(): ?array;
    public function fetchAll(): ?array;
}