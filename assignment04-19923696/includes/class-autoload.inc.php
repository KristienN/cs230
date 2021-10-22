<?php

spl_autoload_register("autoload");

function autoload($className){
    $path = 'classes/';
    $extension = '.class.php';
    $filename = $path . $className . $extension;

    if(!file_exists($filename)) return false;

    include_once $filename;
}