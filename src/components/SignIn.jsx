import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useGoogleSignIn } from "../context/state/AuthState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Google } from "react-bootstrap-icons";

function SignIn() {
  let navigate = useNavigate();
  const { signIn, user } = useAuthContext();

  const [signInWithGoogle, userData, loading, error] = useGoogleSignIn();

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      signIn(JSON.parse(localStorage.getItem("user")));
      navigate("/dashboard");
    }
  }, [signIn, user, navigate]);
  if (error) {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <p>{error.message}</p>
          </Col>
        </Row>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }
  if (userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
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
