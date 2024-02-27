<?php

declare(strict_types=1);
namespace User;

interface ILog
{
    public function logIn(string $username, string $password): void;
    public function logOut(): void;
}