import {Col, Container, Row} from 'reactstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <Container className="fluid mt-2">
            <h1 id='contact'>Contact</h1>
            <hr />
            <Row>
                <ContactForm />
            </Row>
            <hr />
        </Container>
    )
};

export default Contact;