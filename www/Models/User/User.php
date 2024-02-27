<?php

declare(strict_types=1);
namespace User;

class User
{
    protected ?int $id = null;

    protected ?string $username = null;
    protected ?string $email = null;
    protected ?string $role = null;
    protected ?string $note = null;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }
}