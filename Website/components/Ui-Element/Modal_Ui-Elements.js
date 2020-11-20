import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ModalUiElement = ({
  children,
  close,
  title,
  animation,
  backdrop,
  size,
  show,
  onHide,
  dialogClassName,
  bodyClassName
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={animation}
        backdrop={backdrop && "static"}
        size={size}
        centered
        dialogClassName={dialogClassName}
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body className={bodyClassName}>{children}</Modal.Body>
        {close && (
          <Modal.Footer>
            <Button variant="primary" size="md" onClick={onHide}>
              {close}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

ModalUiElement.prototype = {
  close: PropTypes.string,
  title: PropTypes.string,
  animation: PropTypes.string,
  backdrop: PropTypes.string,
  size: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dialogClassName: PropTypes.string,
  bodyClassName: PropTypes.string
}

export default ModalUiElement;
