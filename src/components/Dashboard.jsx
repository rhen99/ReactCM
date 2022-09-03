import { useState } from "react";
import CustomerList from "./CustomerList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddModal from "./AddModal";
function Dashboard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);
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
          <CustomerList />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
