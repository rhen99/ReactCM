import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCustomersContext } from "../context/state/CustomersState";
import { useAuthContext } from "../context/state/AuthState";
function AddModal({ show, handleCloseAddModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  const { addCustomer } = useCustomersContext();
  const { user } = useAuthContext();

  const handleAddCustomer = (e) => {
    e.preventDefault();
    handleCloseAddModal();
    const newCustomer = {
      id: Math.floor(Math.random * 999999),
      name,
      email,
      phone,
      url,
      user_id: user.user.uid,
    };
    addCustomer(newCustomer);
  };
  return (
    <Modal show={show} onHide={handleCloseAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAddCustomer}>
          <Form.Group className="mb-3" controlId="customerName">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Customer Name..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerEmail">
            <Form.Label>Customer Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Customer Email..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerPhone">
            <Form.Label>Customer Phone Number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter Customer Number..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerSocialMedia">
            <Form.Label>Customer Social Media URL (optional)</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="Enter Customer Social Media..."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Customer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddModal;
