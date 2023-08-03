import { Container, Row, Col } from "react-bootstrap";
import { allClass } from "../data/index";
import FaqComponent from "../components/FAQComponent";

const classPage = () => {
  return (
    <div className="class-page">
      <div className="class min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">
                All <span style={{ color: "#dc3545" }}>Classes</span>
              </h1>
              <p className="text-center">
                Comprehensive Learning Journey: Discover our Full Range of
                Classes!
              </p>
            </Col>
          </Row>
          <Row>
            {allClass.map((classes) => {
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
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default classPage;
