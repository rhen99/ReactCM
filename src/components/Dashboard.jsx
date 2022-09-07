import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/state/AuthState";
import { useCustomersContext } from "../context/state/CustomersState";

import CustomerList from "./CustomerList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import Spinner from "react-bootstrap/Spinner";
import AddModal from "./AddModal";

function Dashboard() {
  const { currentUser } = useAuthContext();
  const { customers } = useCustomersContext();
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  useEffect(() => {
    if (!localStorage.getItem("isLoading") && !currentUser) {
      navigate("/");
    }
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Customer List</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <Button variant="success" onClick={handleShowAddModal}>
            Add Customer
          </Button>
          <AddModal
            show={showAddModal}
            handleCloseAddModal={handleCloseAddModal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomerList customers={customers} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
