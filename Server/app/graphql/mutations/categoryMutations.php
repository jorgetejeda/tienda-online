<?php

use App\Models\Category;
use GraphQL\Type\Definition\Type;

$categoryMutations = [
    "addCategory" => [
        "type" => $categoryType,
        "args" => [
            "name" => Type::nonNull(Type::string()),
            "description" => Type::nonNull(Type::string())
        ],
        "resolve" => function ($root, $args) {
            $category = new Category([
                "name" => $args["name"],
                "description" => $args["description"],
            ]);
            $category->save();
            return $category->toArray();
        }
    ],
    "updateCategory" => [
        "type" => $categoryType,
        "args" => [
            "id" => Type::nonNull(Type::int()),
            "name" => Type::string(),
            "description" => Type::string()
        ],
        "resolve" => function ($root, $args) {
            $category = Category::find($args["id"]);
            $category->name = isset($args["name"]) ? $args["name"] : $category->name;
            $category->description = isset($args["description"]) ? $args["description"] : $category->description;
            $category->save();
            return $category->toArray();
        }
    ],

];
