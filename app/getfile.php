<?php

// $url = $_POST['url'];
// $name = preg_split("/\//", $url, 0, PREG_SPLIT_NO_EMPTY);
$fileName = dirname(__FILE__) . '/pdf/' . uniqid() . '.pdf';

$output  = 'phantomjs --ignore-ssl-errors=true "' . dirname(__FILE__) . '/js/rasterize.js" "' . $_POST['url'] . '" "' . $fileName . '"';
exec($output);
// var_dump($output);
exit();

if (file_exists($fileName)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($fileName));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($fileName));
    readfile($fileName);
    exit;
}
?>
