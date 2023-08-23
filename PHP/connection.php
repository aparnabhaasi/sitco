<?php

// $conn=mysqli_connect('localhost','jndoors','Jn_doorhouse@123','jndoors','3306');
$conn = mysqli_connect('localhost', 'root', '', 'sitco', '3306');

function insert($qry) {
    $res = mysqli_query($GLOBALS['conn'], $qry);
    return mysqli_insert_id($GLOBALS['conn']);
}

function select($qry) {
    $res = mysqli_query($GLOBALS['conn'], $qry);
    $result = mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $result;
}

function update($q) {
    mysqli_query($GLOBALS['conn'], $q);
}

function redirect($url) {
    echo "<script type='text/javascript'>window.location='{$url}';</script>";
}

function alert($msg) {
    echo "<script>alert('{$msg}');</script>";
}

function delete($qry) {
    $res = mysqli_query($GLOBALS['conn'], $qry);
    return $res;
}
?>
