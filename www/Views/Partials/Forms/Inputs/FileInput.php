<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/../FormElement.php";

use \Forms\FormElement;

class FileInput extends FormElement
{
  public function render(string $token, int $i)
  {

    return '<input id="file" class="custom-file-input" type="file" name="' . $token . $i . '" required>

    <style>

    .custom-file-input {
      width: 100%;
    }

    .input[type=file] {
      width: 100%;
      max-width: 100%;
      color: #444;
      padding: 5px;
      background: #fff;
      border-radius: 10px;
      border: 1px solid #555;
    }

    input[type=file]::file-selector-button {
      margin-right: 20px;
      border: none;
      background: var(--reconext-light-blue);
      padding: 10px 20px;
      border-radius: 10px;
      color: black;
      cursor: pointer;
      transition: background .2s ease-in-out;
    }

    input[type=file]::file-selector-button:hover {
      background: var(--reconext-blue);
      color: var(--reconext-white);
    }

    </style>';
  }
}