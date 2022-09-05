import { useState } from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { useCustomersContext } from "../context/state/CustomersState";

import EditModal from "./EditModal";

import Dropdown from "react-bootstrap/Dropdown";

function Customer({ customer }) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = (e) => {
    e.preventDefault();
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const { deleteCustomer } = useCustomersContext();

  const handleDeleteCustomer = (e) => {
    e.preventDefault();
    deleteCustomer(customer.id);
  };
  return (
    <tbody>
      <tr>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle variant="default">
              <ThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={handleShowEditModal}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={handleDeleteCustomer}>
                Delete
              </Dropdown.Item>
              {customer.url && (
                <Dropdown.Item href="#" target="_blank">
                  Open Social Media
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <EditModal
            show={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
            customer={customer}
          />
        </td>
      </tr>
    </tbody>
  );
}

export default Customer;
