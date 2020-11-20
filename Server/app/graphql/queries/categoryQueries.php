<?php

use App\Models\Category;
use GraphQL\Type\Definition\Type;

$categoryQueries = [
    "category" => [
        "type" => $categoryType,
        "args" => [
            "id" => Type::nonNull(Type::int())
        ],
        "resolve" => function ($root, $args) {
            $category = Category::find($args["id"])->toArray();
            return $category;
        }
    ],
    "categories"=>[
        "type"=>Type::listOf($categoryType),
        "resolve"=>function($root, $args){
            $categories = Category::get()->toArray();
            return $categories;
        }
    ]
];
