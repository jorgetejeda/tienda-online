<?php

use GraphQL\Type\Definition\ObjectType;

require("mutations/productMutations.php");
require("mutations/categoryMutations.php");

$mutations = array();
$mutations += $productMutations;
$mutations += $categoryMutations;

$rootMutation = new ObjectType([
    "name" => "Mutation",
    "fields" => $mutations
]);
