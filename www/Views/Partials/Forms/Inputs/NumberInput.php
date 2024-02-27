<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/../FormElement.php";

use \Forms\FormElement;

class NumberInput extends FormElement
{
    public function render(string $token, int $i)
    {
        return '
        <div class="w3-row w3-section">
            <div class="w3-col" style="width:50px"></div>
            <div class="w3-rest">
                <input class="w3-input w3-border"
                    title="Use only numbers, to input below value of 10 a leading zero will be added"
                    pattern="^[0-9]{1,3}" name="' . $token . $i . '" type="text" placeholder="' . $this->placeholder . '"
                    required>
            </div>
        </div>';
    }
}

