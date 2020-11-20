import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ModalUiElement from "../Ui-Element/Modal_Ui-Elements";
import { InputUiElement } from "../Ui-Element/Input-Ui_Element";
import { gql, useMutation } from "@apollo/client";

const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!, $description: String!) {
    addCategory(name: $name, description: $description) {
      id
      name
    }
  }
`;

const ModalCreatCategory = ({ show, onHide }) => {
  const [fields, setFields] = useState({
    name: null,
    description: null,
  });

  const [addCategory, { data }] = useMutation(ADD_CATEGORY, {
    onCompleted: (data) => console.log("Data from mutation", data),
    onError: (error) => console.error("Error creating a category", error),
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const createCategory = (e) => {
    e.preventDefault();
    addCategory({
      variables: { name: fields.name, description: fields.description },
    });
    onHide(false);
  };

  return (
    <ModalUiElement
      show={show}
      onHide={() => onHide(false)}
      title="New Product"
      size="lg"
      animation="true"
    >
      <Form className="w-100" onSubmit={createCategory}>
        <InputUiElement
          placeholder="Name"
          size="lg"
          name="name"
          onChange={handleChange}
          autoComplete="on"
        />
        <InputUiElement
          placeholder="Description"
          size="lg"
          name="description"
          onChange={handleChange}
          autoComplete="on"
        />
        <Button type="submit" className="mr-2">
          Save
        </Button>
        <Button className="btn-danger" onClick={() => onHide(false)}>
          Cancel
        </Button>
      </Form>
    </ModalUiElement>
  );
};

export default ModalCreatCategory;
