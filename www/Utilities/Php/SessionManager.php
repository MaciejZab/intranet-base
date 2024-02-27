<?php

declare(strict_types=1);
namespace Utilities;

session_start();

// DOCS: README.md 
abstract class SessionManager
{
    public static function get_SESSION(): array
    {
        return $_SESSION;
    }

    public static function set_SESSION(array $sessionArray): void
    {
        $_SESSION = $sessionArray;
    }

    public static function destroySession(): bool
    {
        $unset = session_unset();
        if ($unset) {
            $destroy = session_destroy();
            if ($destroy) {
                return true;
            }
        }
        return false;
    }
    public static function unsetSessionKey(string $sessionArrayKey): void
    {
        unset($_SESSION[$sessionArrayKey]);
    }
}
