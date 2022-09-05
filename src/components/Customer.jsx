import Dropdown from "react-bootstrap/Dropdown";
import { ThreeDots } from "react-bootstrap-icons";
function Customer({ customer }) {
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
              <Dropdown.Item href="#">Edit</Dropdown.Item>
              <Dropdown.Item href="#">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </tbody>
  );
}

export default Customer;
