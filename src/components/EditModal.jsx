import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCustomersContext } from "../context/state/CustomersState";

function EditModal({ show, handleCloseEditModal, customer }) {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [url, setUrl] = useState(customer.url);

  const { updateCustomer } = useCustomersContext();

  const handleEditCustomer = (e) => {
    e.preventDefault();
    handleCloseEditModal();
    const newCustomer = {
      id: customer.id,
      name,
      email,
      phone,
      url,
    };
    updateCustomer(newCustomer);
  };
  return (
    <Modal show={show} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEditCustomer}>
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

export default EditModal;
