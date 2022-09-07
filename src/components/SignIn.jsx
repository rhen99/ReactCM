import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn, useAuthContext } from "../context/state/AuthState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Google } from "react-bootstrap-icons";

function SignIn() {
  const [signInWithGoogle, , loading, error] = useGoogleSignIn();
  const navigate = useNavigate();

  const { currentUser } = useAuthContext();

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("isAuth", true);
      navigate("/dashboard");
    }
  });
  if (error) {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <Alert variant="danger">
              {error.message} <Alert.Link href="/">Go back</Alert.Link>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  if (loading || localStorage.getItem("isAuth")) {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col className="text-center">
            <Spinner variant="primary" animation="border" />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h3 className="text-center">Sign In With:</h3>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="primary"
            size="lg"
            style={{ width: "50%" }}
            onClick={() => signInWithGoogle()}
          >
            <Google color="white" className="mx-1 pb-1" />
            Sign In With Google
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
