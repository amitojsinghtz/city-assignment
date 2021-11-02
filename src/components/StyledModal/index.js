import { Modal, Button } from "react-bootstrap";

const StyledModal = (props) => {
  const {
    show,
    handleClose,
    handleSubmit,
    title,
    children,
  } = props;


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>

      </Modal>
    </>
  );
};

export default StyledModal;
