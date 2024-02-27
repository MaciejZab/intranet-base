<?php

declare(strict_types=1);
namespace Forms;

abstract class FormElement
{
    protected $placeholder;
    protected $endpoint;

    public function __construct(string $placeholder = '', string $endpoint = '')
    {
        $this->placeholder = $placeholder;
        $this->endpoint = $endpoint;
    }

    public abstract function render(string $token, int $i);
}
