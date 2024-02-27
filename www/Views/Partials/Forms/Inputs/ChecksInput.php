<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/../FormElement.php";

use \Forms\FormElement;

class ChecksInput extends FormElement
{

    public function build()
    {
        $html = '';

        foreach (explode("&", $this->placeholder) as $checkName) {
            $html .= '<label class="form-control">
                    <input type="checkbox" name="checkbox" />
                    ' . $checkName . '
                  </label>';
        }

        return $html;
    }

    public function render(string $token, int $i)
    {
        return '
        <div class="w3-container" name="' . $token . $i . '">
            ' . $this->build() . '
        </div>

        <style>
            label {
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 8px;
                color: var(--reconext-blue);
            }

            input[type="checkbox"] {
                appearance: none;
                background-color: #fff;
                margin: 0;
                font: inherit;
                color: var(--reconext-blue);
                width: 1.15em;
                height: 1.15em;
                border: 0.15em solid var(--reconext-light-blue);
                border-radius: 0.15em;
                transform: translateY(-0.075em);
                display: grid;
                place-content: center;
            }

            input[type="checkbox"]::before {
                content: "";
                width: 0.65em;
                height: 0.65em;
                transform: scale(0);
            }

            input[type="checkbox"]:checked::before {
                transform: scale(1);
                background-color: var(--reconext-blue);
                transform-origin: bottom left;
                clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            }
        </style>';
    }
}