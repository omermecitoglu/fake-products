import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./Brand";
import CurrencyMenu from "./CurrencyMenu";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="shadow">
      <Container>
        <Brand />
        <CurrencyMenu />
      </Container>
    </Navbar>
  );
};

export default Header;
