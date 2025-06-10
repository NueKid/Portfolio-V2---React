import { Button, Label, Input, FormGroup, Col } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const handleSubmit = (values, { resetForm }) => {

        emailjs
        .sendForm('service_nipyifn', 'contactus_zwwjxqj', form.current, {
            publicKey: 'a4_pNEdcCQFfD4XNB',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        console.log('Form Values:', values);
        console.log('In JSON format:', JSON.stringify(values));
        alert('Your message has been sent successfully!');
        resetForm();
    };


    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNum: '',
                contactType: 'Email',
                message: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form ref={form}>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='firstName'
                            id='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            id='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field
                            name='phoneNum'
                            id='phoneNum'
                            placeholder='Phone Number'
                            className='form-control'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name='email'
                            id='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        Preferred Contact Method:
                    </Label>
                    <Col md='4'>
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control'
                            style={{ caretColor: 'transparent'}}
                        >
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='2'>
                        Message
                    </Label>
                    <Col md='10'>
                        <Field
                            name='message'
                            id='message'
                            placeholder='Your Message'
                            as='textarea'
                            rows='10'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row align='left'>
                    <Col md={{ size: '10', offset: '2' }}>
                        <Button type='submit' className='btn-primary'>
                            Send Message
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
}

export default ContactForm;