import {Col, Container, Row} from 'reactstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <Container className='mt-2'>
            <Row>
                <h1 id='contact'>Contact</h1>
                <hr />
                <ContactForm />
            </Row>
            <hr />
        </Container>
    )
};

export default Contact;