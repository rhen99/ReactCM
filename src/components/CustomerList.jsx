import Table from "react-bootstrap/Table";
import Customer from "./Customer";
function CustomerList() {
  return (
    <Table hover className="mt-5">
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </thead>
      <Customer />
    </Table>
  );
}

export default CustomerList;
