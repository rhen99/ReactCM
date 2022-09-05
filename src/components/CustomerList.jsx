import Table from "react-bootstrap/Table";
import Customer from "./Customer";
function CustomerList({ customers }) {
  return (
    <Table hover className="mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>More...</th>
        </tr>
      </thead>
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </Table>
  );
}

export default CustomerList;
