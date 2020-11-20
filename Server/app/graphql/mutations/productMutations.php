<?php

use App\Models\Product;
use GraphQL\Type\Definition\Type;

$productMutations = [
    "addProduct" => [
        "type" => $productType,
        "args" => [
            "name" => Type::nonNull(Type::string()),
            "description" => Type::nonNull(Type::string()),
            "price" => Type::nonNull(Type::float()),
            "image" => Type::string(),
            "category_id" => Type::nonNull(Type::int())
        ],
        "resolve" => function ($root, $args) {
            $product = new Product([
                "name" => $args["name"],
                "description" => $args["description"],
                "price" => $args["price"],
                "image" => $args["image"],
                "category_id" => $args["category_id"]
            ]);
            $product->save();
            return $product->toArray();
        }
    ],
    "updateProduct" => [
        "type" => $productType,
        "args" => [
            "id"=> Type::nonNull(Type::int()),
            "name" => Type::string(),
            "description" => Type::string(),
            "price" => Type::float(),
            "image" => Type::string(),
            "category_id" => Type::int()
        ],
        "resolve" => function ($root, $args) {
            $product = Product::find($args["id"]);
            $product->name = isset($args["name"]) ? $args["name"] : $product->name;
            $product->description = isset($args["description"]) ? $args["description"] : $product->description;
            $product->price = isset($args["price"]) ? $args["price"] : $product->price;
            $product->image = isset($args["image"]) ? $args["image"] : $product->image;
            $product->category_id = isset($args["category_id"]) ? $args["category_id"] : $product->category_id;
            $product->save();
            return $product->toArray();
        }
    ],
    "deleteProduct" => [
        "type" => $productType,
        "args" => [
            "id" => Type::nonNull(Type::int())
        ],
        "resolve" => function ($root, $args) {
            $product = Product::find($args["id"]);
            $product->delete();
            return $product->toArray();
        }
    ]
];
