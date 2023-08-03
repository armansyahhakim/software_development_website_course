import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/banner-img.png";
import { newClass } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FAQComponent";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Find Your <span style={{ color: "#dc3545" }}>Potential</span>
                <br /> With Us!
              </h1>
              <p className="mb-4">
                Embark on a Transformative Journey: Unleash Your Full Potential
                and Discover Excellence with Us!
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/class")}
              >
                Find Class!
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Look for Discount!
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="class w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                Latest <span style={{ color: "#dc3545" }}>Classes!</span>
              </h1>
              <p className="text-center">
                Explore Our Latest Offerings in New Classes!
              </p>
            </Col>
          </Row>
          <Row>
            {newClass.map((classes) => {
              return (
                <Col
                  key={classes.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-delay={classes.delay}
                >
                  <img
                    src={classes.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={classes.star1}></i>
                    <i className={classes.star2}></i>
                    <i className={classes.star3}></i>
                    <i className={classes.star4}></i>
                    <i className={classes.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{classes.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{classes.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {classes.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/class")}
              >
                Look for more classes{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default HomePage;
