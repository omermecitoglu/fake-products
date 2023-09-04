import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./Brand";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="shadow">
      <Container>
        <Brand />
      </Container>
    </Navbar>
  );
};

export default Header;
