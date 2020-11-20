<?php

use GraphQL\Type\Definition\ObjectType;

require("queries/productQueries.php");
require("queries/categoryQueries.php");

$queries = array();
$queries += $productQueries;
$queries += $categoryQueries;

$rootQuery = new ObjectType([
    "name" => "Query",
    "fields" => $queries
]);