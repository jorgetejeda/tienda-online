import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const SelectUiElement = ({
  label,
  size,
  controlId,
  option,
  style,
  defaultFirstOption,
  className,
  onChange
}) => (
  <Form.Group controlId={controlId} style={style} className={className}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control as="select" size={size} onChange={onChange}>
      {defaultFirstOption && <option>{defaultFirstOption}</option>}
      {option.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

SelectUiElement.propTypes = {
  controlId: PropTypes.string,
  option: PropTypes.array.isRequired,
  defaultFirstOption: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  errors: PropTypes.string,
  className: PropTypes.string,
  touched: PropTypes.bool,
};

export default SelectUiElement;