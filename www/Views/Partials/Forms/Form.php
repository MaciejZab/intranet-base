<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/FormElement.php";

use \Forms\FormElement;

class Form
{
    protected string $token;
    private string $id;
    private string $titleText;
    private string $submitText;
    private $elements = [];

    public function __construct($title, $submitText)
    {
        $this->token = '_' . uniqid();
        $this->id = '_' . uniqid();
        $this->titleText = $title;
        $this->submitText = $submitText;
    }

    public function addElements(array $elements)
    {
        foreach ($elements as $element) {
            if ($element instanceof FormElement) {
                $this->elements[] = $element;
            } else {
                throw new \Error("Invalid element. Expected instance of FormElement.");
            }
        }
    }

    public function render()
    {
        echo '<div class="w3-container">
                <form id="' . $this->id . '" class="w3-container w3-card-4 bg-reconext-white color-reconext-blue w3-margin">
                    <h2 class="w3-center w3-text-just-b">' . $this->titleText . '</h2>';

        for ($i = 0; $i < count($this->elements); $i++) {
            $element = $this->elements[$i];
            echo $element->render($this->token, $i);
        }

        echo '  <div class="w3-cell-row" style="padding: 0px;">
                    <div class="w3-container w3-cell w3-cell-middle" style="padding: 0px;">
                        <div class="w3-row w3-section" style="padding-left: 60px;" id="ins_add_result">
                            &nbsp;
                        </div>
                    </div>

                    <div class="w3-container w3-cell w3-cell-middle" style="padding: 0px;">
                        <div class="w3-row w3-section">
                            <button id="post-record-button" type="submit" value="submit"
                                class="w3-button w3-section w3-padding w3-right bg-reconext-light-blue bg-reconext-blue-hover color-reconext-white-hover">
                                ' . $this->submitText . '</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>';

        return $this;
    }

    private function containsFileInput(array $elements): bool
    {
        foreach ($elements as $element) {
            if ($element instanceof FileInput) {
                return true;
            }
        }
        return false;
    }

    public function attachSubmitHandler(array $keys, string $endpoint, string $method)
    {
        echo '
        <script type="module">
        import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";

        document.querySelector("#' . $this->id . '").addEventListener("submit", (event) => {
            event.preventDefault();
            const form = document.querySelector("#' . $this->id . '");' . PHP_EOL;

        for ($i = 0; $i < count($this->elements); $i++) {
            $class = $this->elements[$i];
            $gatherer = '';

            if ($class instanceof FileInput) {
                $gatherer = '.files[0];' . PHP_EOL;
            } elseif ($class instanceof ChecksInput) {
                $gatherer = '.checked;' . PHP_EOL;
            } else {
                $gatherer = '.value;' . PHP_EOL;
            }

            if ($class instanceof ChecksInput) {
                echo '            const checks = form.querySelectorAll("[name=\'checkbox\']");' . PHP_EOL;
                for ($j = 0; $j < count($keys[$i]); $j++) {
                    echo '            const ' . $keys[$i][$j] . ' = checks[' . $j . ']' . $gatherer;
                }
            } else {
                echo '            const ' . $keys[$i] . ' = form.querySelector("[name=\'' . $this->token . $i . '\']")' . $gatherer;
            }
        }

        echo '            const data = {';
        foreach ($keys as $key) {
            if (is_array($key)) {
                foreach ($key as $subKey) {
                    echo $subKey . ',';
                }
            } else {
                if ($key !== '_file') {
                    echo $key . ',';
                }
            }
        }
        echo '} ';

        echo '
            const url = window.location.href;
            const urlParts = url.split("?");
            const queryString = urlParts[1];
            const requestUrl = `' . $endpoint . '?${queryString}`;';

        if (count($this->elements) === 1 && $this->containsFileInput($this->elements)) {
            echo '
            const requestFile = new HttpRequest(requestUrl, "POST", null, _file);
            requestFile.send().then(response => {
                console.log(response);
                window.location.reload();
            });';
        } else if (count($this->elements) > 1 && $this->containsFileInput($this->elements)) {
            echo '
            const request = new HttpRequest(requestUrl, "' . $method . '", data);
            request.send("json").then(response => {
                console.log(response);
                const requestFile = new HttpRequest(requestUrl, "POST", null, _file);
                requestFile.send().then(response => {
                    console.log(response);
                    window.location.reload();
                });
            });';
        } else {
            echo '
            const request = new HttpRequest(requestUrl, "' . $method . '", data);
            request.send("json").then(response => {
                console.log(response);
                  window.location.reload();
            });';
        }
        echo '
        });
        </script>';

    }

}
