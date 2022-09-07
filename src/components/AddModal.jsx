import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../context/state/AuthState";
import {
  useCustomersContext,
  setCustomer,
} from "../context/state/CustomersState";
function AddModal({ show, handleCloseAddModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  const { currentUser } = useAuthContext();
  const { addCustomer } = useCustomersContext();

  const [uid] = useState(currentUser?.uid);

  const handleAddCustomer = (e) => {
    e.preventDefault();
    handleCloseAddModal();
    const newCustomer = {
      name,
      email,
      phone,
      url,
      creator_id: uid,
    };
    setCustomer(newCustomer)
      .then((docRef) => {
        addCustomer({ ...newCustomer, id: docRef.id });
        setName("");
        setEmail("");
        setPhone("");
        setUrl("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal show={show} onHide={handleCloseAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAddCustomer}>
          <Form.Group className="mb-3" controlId="customerName">
            <Form.Label>
              Customer Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Customer Name..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerEmail">
            <Form.Label>
              Customer Email <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Customer Email..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerPhone">
            <Form.Label>
              Customer Phone Number <span style={{ color: "red" }}>*</span>
            </Form.Label>
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
