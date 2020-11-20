import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  {
    products {
      id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Dog($id: Int!) {
    product(id: $id){
      name
      description
      price
      category_id
    }
  }
`;

export const CATEGORIES = gql`
   {
    categories {
      id
      name
    }
  }
`;
