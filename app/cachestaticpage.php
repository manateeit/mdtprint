<?php

$name = preg_split("/\//", $_POST['url'], 0, PREG_SPLIT_NO_EMPTY);

file_put_contents('cache/'. $name[sizeof($name) - 1] . ".html", $_POST['page']);