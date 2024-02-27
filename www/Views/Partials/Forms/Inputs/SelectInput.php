<?php

declare(strict_types=1);
namespace Forms;

require_once __DIR__ . "/../FormElement.php";

use \Forms\FormElement;

class SelectInput extends FormElement
{
    public function render(string $token, int $i)
    {
        return '
            <select class="w3-input w3-border" name="' . $token . $i . '" style="height: 42.17px;"
                required>
            </select>

            <script type="module">
                import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";
                import { SelectOptions } from "/Utilities/Javascript/Categories/SelectOptions.js";

                const url = window.location.href;
                const urlParts = url.split("?");
                const queryString = urlParts[1];

                const params = new URLSearchParams(queryString);
                const category = params.get("category");

                let controller = null;
                        let options = null;

                        switch (category) {
                            case "program":
                                controller = "Programs/categories.php";
                                break;
                            case "ims":
                                controller = "IMS/subcategories.php";
                                break;

                            default:
                                break;
                        }

                const requestUrl = `' . $this->endpoint . '?${queryString}`;
                const request = new HttpRequest(requestUrl);
                request.send().then(response => {
                    // console.log(response.data);
                    const data = response.data; 

                    switch (category) {
                                case "program":
                                    options = [data];
                                    break;
                                case "ims":
                                    options = [null, data];
                                    break;

                                default:
                                    break;
                            }

                    if (data) new SelectOptions(...options).generateSelectBody(false).mount("[name=\'' . $token . $i . '\']");
                }).catch(error => {
                    console.error(error);
                });

            </script>';
    }
}