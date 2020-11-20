import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { InputUiElement } from "../Ui-Element/Input-Ui_Element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBox } from "@fortawesome/free-solid-svg-icons";
import SelectUiElement from "../Ui-Element/Select_Ui-Element";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../../Service/queries";

const FilterProduct = (props) => {
  const [fields, setFields] = useState({
    search: null,
    category: 0,
  });

  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.filter(fields);
  };

  return (
    <Row className="mt-5">
      <Col md={3}>
        <h1>
          <FontAwesomeIcon icon={faBox} color="#BE9666" /> Product
        </h1>
      </Col>
      <Col md={9}>
        <Form
          className="d-flex justify-content-end w-100"
          onSubmit={handleSubmit}
        >
          <SelectUiElement
            controlId="selectCategory"
            defaultFirstOption="Categoria"
            size="lg"
            name="category"
            onChange={handleChange}
            option={data.categories.map((category) => {
              return { value: category.id, text: category.name };
            })}
          />
          <InputUiElement
            placeholder="Looking for a product?"
            name="search"
            onChange={handleChange}
            className="m-0 p-4"
            size="lg"
            classFormGroup="w-50"
          />
          <Button type="submit" className="mb-3">
            <span className="mr-2">Search</span>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default FilterProduct;
