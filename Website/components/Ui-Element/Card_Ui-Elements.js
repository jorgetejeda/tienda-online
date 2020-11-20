import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const CardUiElement = ({ 
  className, 
  customBodyClassName, 
  children
}) => {
  return (
    <React.Fragment>
      <Card className={className}>
        <Card.Body className={customBodyClassName}>{children}</Card.Body>
      </Card>
    </React.Fragment>
  );
};

CardUiElement.propTypes = {
  customBodyClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardUiElement;
