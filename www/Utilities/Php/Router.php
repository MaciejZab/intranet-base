<?php

declare(strict_types=1);
namespace Utilities;

require_once __DIR__ . '/SessionManager.php';

use Utilities\SessionManager;


// DOCS: README.md 
class Router
{
    private string $viewsRootPath;
    private string $viewPath;
    private array $sessionArray;
    public function __construct()
    {
        $uri = parse_url($_SERVER['REQUEST_URI'])['path'];

        if ($uri === '/') {
            $uri = '/index.php';
        }

        $this->viewsRootPath = __DIR__ . '/../../Views';
        $this->viewPath = str_replace(".php", ".view.php", $uri);
        $this->sessionArray = SessionManager::get_SESSION();

    }

    public function requireView(): void
    {
        require_once $this->viewsRootPath . $this->viewPath;
    }

    public function checkLogStatus(): Router
    {
        $current_url = $_SERVER['REQUEST_URI'];
        $parsed_url = parse_url($current_url);
        $path = $parsed_url['path'];

        if (empty($this->sessionArray['user_logged']) && $path !== '/') {
            echo '<script>window.location.href = "/";</script>';
        } else if (isset($this->sessionArray['user_logged']) && $path === '/') {
            echo '<script>window.location.href = "/home.php";</script>';
        }

        return $this;
    }

    function checkLogPrivileges($protection = "operator"): bool
    {
        $userRole = $this->sessionArray["user_role"];

        $privilegeLevels = [ // => who can access
            'admin' => ['admin'],
            'moderator' => ['admin', 'moderator'],
            'operator' => ['admin', 'moderator', 'operator']
        ];

        // Check if the user's role has access to the specified protection level
        if (in_array($userRole, $privilegeLevels[$protection], true)) {
            return true;
        }

        return false;
    }

}