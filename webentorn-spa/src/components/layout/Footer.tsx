import { Container } from "react-bootstrap";
import { SITE } from "../../constants/site";

function Footer() {
  return (
    <footer className="site-footer py-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>
          © {new Date().getFullYear()} {SITE.brand}
        </span>
        <span>{SITE.email}</span>
      </Container>
    </footer>
  );
}

export default Footer;
