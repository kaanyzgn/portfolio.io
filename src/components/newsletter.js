import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearField();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    };

    const clearField = () => {
        setEmail('');
    };
    
    return (
        <Col lg={12}>
            <div >
                
            </div>
        </Col>
    )
}