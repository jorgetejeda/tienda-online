import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ModalUiElement from "../Ui-Element/Modal_Ui-Elements";
import { InputUiElement } from "../Ui-Element/Input-Ui_Element";
import SelectUiElement from "../Ui-Element/Select_Ui-Element";

import { useQuery } from "@apollo/client";
import { CATEGORIES, GET_PRODUCT } from "../../Service/queries";

const ModalCreatProduct = ({ show, onHide, productId }) => {
  const [fields, setFields] = useState({
    name: null,
    description: null,
    price: null,
    category: 0,
  });

  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error :(</p>;

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ModalUiElement
      show={show}
      onHide={() => onHide(false)}
      title="New Product"
      size="lg"
      animation="true"
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <InputUiElement
          placeholder="Name"
          size="lg"
          name="name"
          onChange={handleChange}
        />
        <InputUiElement
          placeholder="Description"
          size="lg"
          name="description"
          onChange={handleChange}
        />
        <InputUiElement
          placeholder="Price"
          type="number"
          size="lg"
          name="price"
          onChange={handleChange}
        />
        <SelectUiElement
          name="category"
          controlId="selectCategory"
          defaultFirstOption="Seleccione la categoria"
          onChange={handleChange}
          size="lg"
          option={data.categories.map((category) => {
            return { value: category.id, text: category.name };
          })}
        />
        <Button className="mr-2" type="submit">
          Save
        </Button>
        <Button className="btn-danger" onClick={() => onHide(false)}>
          Cancel
        </Button>
      </Form>
    </ModalUiElement>
  );
};

export default ModalCreatProduct;
