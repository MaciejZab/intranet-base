<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/../FormElement.php";

use \Forms\FormElement;

class TextInput extends FormElement
{
    public function render(string $token, int $i)
    {
        return '
        <div class="w3-row w3-section">
            <div class="w3-col" style="width:50px"></div>
            <div class="w3-rest">
                <input class="w3-input w3-border" name="' . $token . $i . '" type="text"
                    placeholder="' . $this->placeholder . '" required>
            </div>
        </div>';
    }
}