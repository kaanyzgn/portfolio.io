import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./mailchimpForm"
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kaanyazgan1/" target="_blank" ><img src={navIcon1} /></a>
                            <a href="https://github.com/kaanyzgn" target="_blank"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/kaanyzgnn/" target="_blank"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2022. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}