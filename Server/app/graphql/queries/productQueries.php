<?php

use App\Models\Product;
use GraphQL\Type\Definition\Type;

$productQueries = [
    "product" => [
        "type" => $productType,
        "args" => [
            "id" => Type::nonNull(Type::int())
        ],
        "resolve" => function ($root, $args) {
            $product = Product::find($args["id"])->toArray();
            return $product;
        }
    ],
    "products"=>[
        "type"=>Type::listOf($productType),
        "resolve"=>function($root, $args){
            $products = Product::get()->toArray();
            return $products;
        }
    ]
];
