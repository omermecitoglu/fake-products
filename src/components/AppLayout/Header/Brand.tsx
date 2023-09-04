import Image from "next/image";
import Link from "next/link";

const Brand = () => (
  <Link href="/" className="navbar-brand">
    <Image
      src="https://react-bootstrap.github.io/img/logo.svg"
      alt="logo"
      width={30}
      height={30}
      className="d-inline-block align-top me-2"
    />
    Brand
  </Link>
);

export default Brand;
