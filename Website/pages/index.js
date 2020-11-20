import { useState } from "react";
import Layout from "../components/Layout/Layout";
import FilterProduct from "../components/Widget/FilterProduct";
import ProductList from "../components/Widget/ProductList";

const Index = () => {
  const [filter, setFilter] = useState({});

  const filterState = (val) => {
    setFilter({...val});
  };
  return (
    <Layout title="Home">
      <FilterProduct filter={filterState} />
      <hr />
      <ProductList filter={filter}/>
    </Layout>
  );
};

export default Index;
