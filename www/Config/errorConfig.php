<?php
// Set the environment (production or testing)
$production = true; // Change this to 'testing' for testing environment

if ($production === true) {
    // Production settings
    error_reporting(E_ALL);
    ini_set('ignore_repeated_errors', TRUE);
    ini_set('display_errors', FALSE);
    ini_set('log_errors', TRUE);
    ini_set('error_log', __DIR__ . "/../errors.log");
} else {
    // Testing settings
    error_reporting(E_ALL);
    ini_set('ignore_repeated_errors', FALSE); // Allow repeated errors to be displayed for testing
    ini_set('display_errors', TRUE); // Display errors for testing
    ini_set('log_errors', FALSE); // Do not log errors for testing
}
?>