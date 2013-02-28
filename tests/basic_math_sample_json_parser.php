#!/usr/bin/env php
<?php
$t = file_get_contents("basic_math_sample.json");
$j = json_decode($t);
print_r( $j )
?>