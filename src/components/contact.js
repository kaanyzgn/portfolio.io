import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        axios.post('http://localhost:5000/contact', formDetails, { headers: { 'content-type': 'application/json' } })
            .then((res) => {
                setButtonText("Send");
                setFormDetails(formInitialDetails);
                if (res.code === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                }
            });
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                Kadir Kaan Yazgan &nbsp; 
                                                
                                            </Col>
                                            
                                            
                                            <Col size={12} sm={6} className="px-1">
                                                E-Mail : kkaan.yazgan@tedu.edu.tr
                                            </Col>
                                            
                                            <Col size={12} className="px-1">
                                                Phone : +90545 619 0706
                                            </Col>
                                            
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}