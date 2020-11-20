import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useQuery, gql, useMutation } from "@apollo/client";
import {PRODUCTS} from "../../Service/queries";


const REMOVE_PRODUCT = gql`
  mutation deleteProduct($type: Int!) {
    deleteProduct(type: $type) {
      id
    }
  }
`;

const Products = (props) => {
  const { loading, error, data } = useQuery(PRODUCTS);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const removeProduct = async (id) => {
    await deleteProduct(id)
  };

  const editProduct = (id) => {
    props.setproductModal(true);
    props.productId(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>RD${product.price}</td>
            <td>{product.category.name}</td>
            <td>
              <Button
                className="btn-danger mx-1"
                onClick={() => removeProduct(product.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className="btn-warning mx-1"
                onClick={() => editProduct(product.id)}
              >
                <FontAwesomeIcon icon={faPencilRuler} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Products;
