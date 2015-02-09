<?php


$url = $_POST['url'];
$name = preg_split("/\//", $url, 0, PREG_SPLIT_NO_EMPTY);
$fileName = dirname(__FILE__) . '/pdf/' . $name[sizeof($name) - 1] . '.pdf';

$baseUrl = $name[0] . '//' . $name[1] . '/cached/';

// $baseUrl = $name[0] . '//' . $name[1] . '/' . $name[2] . '/' . $name[3] . '/';

$output  = 'phantomjs --ignore-ssl-errors=true "' . dirname(__FILE__) . '/js/rasterize.js" "' . $baseUrl . $name[sizeof($name) - 1] . '.html' . '" "' . $fileName . '"';
exec($output);

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