<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

$name = $_GET['name'];

$username = array('sanath' , 'pasindu' , 'hase' , 'rane', 'kure', 'saji');

if(in_array($name, $username)){
    echo "match";
}elseif (trim($name == '')) {
    echo "enter the input field";
}else{
    echo "not a member";
}
echo '</response>';
?>