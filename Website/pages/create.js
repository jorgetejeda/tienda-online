import { useState } from "react";
import Layout from "../components/Layout/Layout";
import CreateProduct from "../components/Widget/CreateProduct";
import ProductsTable from "../components/Widget/ProductsTable";

const createProduct = () => {
  const [productModal, setproductModal] = useState(false);
  const [product, setProduct] = useState();

  const productId = (id) => {
    setProduct(id);
  };

  return (
    <Layout title="Create Product">
      <CreateProduct
        productModal={productModal}
        setProductModal={setproductModal}
        productId={product}
      />
      <hr />
      <ProductsTable setproductModal={setproductModal} productId={productId} />
    </Layout>
  );
};

export default createProduct;
