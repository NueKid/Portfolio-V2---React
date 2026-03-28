import {Col, Container, Row} from 'reactstrap';
import ContactForm from '../components/ContactForm';
import { Element } from 'react-scroll';

const Contact = () => {
    return (
        <Element name='contact'>
            <Container className="fluid mt-2">
                <h1 id='contact'>Contact</h1>
                <hr />
                <Row className='my-4'>
                    <ContactForm />
                </Row>
                <hr />
            </Container>
        </Element>
    )
};

export default Contact;