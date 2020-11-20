<?php

use App\Models\Category;
use App\Models\Product;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;


$productType = new ObjectType([
    "name" => "Product",
    "description" => "Consulta a la tabla de producto",
    "fields" => function () use (&$categoryType) {
        return [
            "id" => Type::int(),
            "name" => Type::string(),
            "description" => Type::string(),
            "price" => Type::float(),
            "category_id" => Type::int(),
            "category" => [
                "type" => $categoryType,
                "resolve" => function ($root, $args) {
                    $productId = $root["id"];
                    $product = Product::where("id", $productId)->with("category")->first();
                    return $product->category->toArray();
                }
            ]
        ];
    }
]);

$categoryType = new ObjectType([
    "name" => "Category",
    "description" => "Consulta a la tabla de categoria",
    "fields" => [
        "id" => Type::int(),
        "name" => Type::string(),
        "description" => Type::string(),
        "products" => [
            "type" => Type::listOf($productType),
            "resolve" => function ($root, $args) {
                $categoryId = $root["id"];
                $category = Category::where("id", $categoryId)->with(["products"])->first();

                return $category->products->toArray();
            }
        ]
    ]
]);
