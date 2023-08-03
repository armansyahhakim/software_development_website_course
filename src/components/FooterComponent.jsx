import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Coding</h3>
            <p className="desc">
              "Elevate your coding skills with Coding!. Subscribing gives you
              unlimited access to top-quality software development tutorials,
              exercises, and projects. Join our community, learn at your pace,
              and get expert guidance. Start your journey today!"
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6285974785490</p>
              </Link>
            </div>
            <div className="mail">
              <Link>
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">armansyahhakim263@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="class">Class</Link>
            <Link to="faq">FAQ</Link>
            <Link to="privacypolicy">Privacy & Policy</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">
              Subscribe for more interesting news!
            </h5>
            <div className="subscribe w-100 w-lg-0">
              <input type="text" placeholder="subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Armansyah Hakim</span>, All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
