import Modal from "react-bootstrap/Modal";
function AddModal({ show, handleCloseAddModal }) {
  return (
    <Modal show={show} onHide={handleCloseAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
        <Modal.Body></Modal.Body>
      </Modal.Header>
    </Modal>
  );
}

export default AddModal;
