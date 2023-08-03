import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FAQComponent";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page mt-20">
      <div className="privacy-policy">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 mt-5 pt-5">
                Privacy & Policy
              </h1>
              <p className="text-center">
                Last Updated: {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Your privacy is important to us. This Privacy Policy outlines
                how we collect, use, and safeguard your personal information
                when you visit and interact with our website. By accessing or
                using our website, you consent to the practices described in
                this policy.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Information We Collect</h4>
              <p>
                We may collect certain personal information that you voluntarily
                provide to us when you register an account, subscribe to our
                newsletter, participate in surveys, or interact with our
                website's features. The types of information we may collect
                include, but are not limited to:
              </p>
              <ul>
                <li>
                  Name and contact information (e.g., email address, phone
                  number)
                </li>
                <li>Demographic information (e.g., age, gender, location)</li>
                <li>
                  Payment details (e.g., credit card information) for processing
                  transactions
                </li>
                <li>Interests and preferences relevant to our services</li>
              </ul>
              <h4 className="fw-bold">How We Use Your Information</h4>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and improve our services, products, and content</li>
                <li>
                  Respond to your inquiries, comments, or customer service
                  requests
                </li>
                <li>Process transactions and send order confirmations</li>
                <li>
                  Send you promotional offers, newsletters, and updates (you can
                  opt-out at any time)
                </li>
                <li>
                  Conduct research and analysis to enhance our website and user
                  experience
                </li>
                <li>
                  Ensure compliance with our Terms of Service and applicable
                  laws
                </li>
              </ul>
              <h4 className="fw-bold">Information Security</h4>
              <p>
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. Despite our efforts, please
                understand that no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
              <h4 className="fw-bold">Third-Party Services</h4>
              <p>
                We may use third-party services (e.g., payment processors,
                analytics providers) to improve and optimize our website. These
                third-party providers may have access to certain personal
                information as necessary to perform their services on our
                behalf. However, they are obligated not to disclose or use the
                information for any other purpose.
              </p>
              <h4 className="fw-bold">Cookies and Similar Technologies</h4>
              <p>
                Our website may use cookies and similar technologies to enhance
                your browsing experience. You can control cookies through your
                browser settings and opt-out of certain tracking technologies.
              </p>
              <h4 className="fw-bold">Children's Privacy</h4>
              <p>
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children. If
                you are a parent or guardian and believe your child has provided
                us with personal information, please contact us, and we will
                promptly delete such information.
              </p>
              <h4 className="fw-bold">Changes to this Privacy Policy</h4>
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time. Changes will be posted on this page with the "Last
                Updated" date. Please review this Privacy Policy periodically to
                stay informed of any updates.
              </p>
              <h4 className="fw-bold">Contact Us</h4>
              <p>
                If you have any questions or concerns regarding this Privacy
                Policy, please contact us at [armansyahhakim263@gmail.com]. This
                privacy policy is a sample and should be customized to fit the
                specific practices and services of your website. Always ensure
                compliance with relevant laws and regulations regarding data
                protection and user privacy.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default PrivacyPolicyPage;
