import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ModalCreatProduct from "./ModalCreateProduct";
import ModalCreatCategory from "./ModalCreateCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faClipboardList, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const CreateProduct = ({ productModal, setProductModal, productId }) => {
  const [categoryModalShow, setcategoryModalShow] = useState(false);

  return (
    <Row className="mt-5">
      <Col>
        <h1><FontAwesomeIcon icon={faPlusSquare} color="#B1D6F6" /> Create</h1>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button className="mr-2" onClick={() => setProductModal(true)}>
          <span className="mr-2">Create Product</span>
          <FontAwesomeIcon icon={faBox} />
        </Button>
        <Button onClick={() => setcategoryModalShow(true)}>
          <span className="mr-2">Create Category</span>
          <FontAwesomeIcon icon={faClipboardList} />
        </Button>
      </Col>
      <ModalCreatProduct
        show={productModal}
        onHide={() => setProductModal(false)}
        productId={productId}
      />
      <ModalCreatCategory
        show={categoryModalShow}
        onHide={() => setcategoryModalShow(false)}
      />
    </Row>
  );
};
export default CreateProduct;
