import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FaqComponent = () => {
  return (
    <div className="faq" data-aos="fade-up">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">
              Frequently Asked{" "}
              <span style={{ color: "#dc3545" }}>Questions</span>
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id} data-aos="fade-up">
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
