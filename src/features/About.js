import { Container, Row, Col, Progress } from 'reactstrap';
import React, { useState } from 'react';
import ProfilePicture from '../app/assets/img/ryen-masters.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody
} from 'reactstrap';

const About = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <Container className='fluid mt-2'>
                <h1 id='about'>About</h1>
                <hr />
            <Row>
                <Col className='mt-2 fluid d-flex justify-content-center'>
                    <img src={ProfilePicture} alt="Ryen Masters" className="img-fluid rounded-circle mb-4" style={{ width: '200px', height: '200px' }} />
                </Col>
                <Col className='mt-2 fluid d-flex'>
                    <p style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='6'>
                    <Accordion flush open={open} toggle={toggle}>
                        <AccordionItem>
                            <AccordionHeader targetId='1'><i className='fa fa-info fa-lg px-2'/>Skills</AccordionHeader>
                            <AccordionBody accordionId='1'>
                                <Progress 
                                    className='my-2' 
                                    value='75'
                                >Project Management
                                </Progress>
                                <Progress
                                    className='my-2' 
                                    value='85'
                                > JavaScript
                                </Progress>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default About;
