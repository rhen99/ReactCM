import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/state/AuthState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Google } from "react-bootstrap-icons";
function SignIn() {
  let navigate = useNavigate();
  const { signIn, isAuthenticated } = useAuthContext();

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signIn();
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [navigate, isAuthenticated]);
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h3 className="text-center">Sign In With:</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="text-center" onSubmit={signInWithGoogle}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              style={{ width: "50%" }}
            >
              <Google color="white" className="mx-1 pb-1" />
              Sign In With Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
