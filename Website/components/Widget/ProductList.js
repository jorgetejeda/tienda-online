import { useEffect } from "react";
import CardUiElement from "../Ui-Element/Card_Ui-Elements";
import { Image, Badge } from "react-bootstrap";
import DEFAULTIMAGE from "../../assets/default-store-350x350.jpg";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../Service/queries";

const ProductList = ({ filter }) => {
  const { loading, error, data } = useQuery(PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
    <div className="d-flex justify-content-between flex-wrap">
      {data.products.map((product) => (
        <CardUiElement
          className="card my-2"
          customBodyClassName="card-body text-center p-0"
          key={product.id}
        >
          <Image src={DEFAULTIMAGE} className="image-product mb-2" />
          <h4 className="card-title text-capitalize">{product.name}</h4>
          <p className="card-text text-capitalize">{product.description}</p>
          <Badge variant="primary" className="text-capitalize">
            {product.category.name}
          </Badge>
          <p className="text-primary font-weigth-bold">RD${product.price}</p>
        </CardUiElement>
      ))}
    </div>
  );
};

export default ProductList;
