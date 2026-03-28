import { Container, 
    Row, 
    Col, 
    Progress, 
    Nav,
    NavItem,
    NavLink,
    TabPane, 
    TabContent } from 'reactstrap';
import { useState } from 'react';
import ProfilePicture from '../app/assets/img/ryen-masters.jpg';
import { Element } from 'react-scroll';

const About = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const [currentSubTab, setCurrentSubTab] = useState('1');

    const toggleTab = (tab) => {
        if (currentTab !== tab) {
            setCurrentTab(tab);
        }
    }

    const toggleSubTab = (tab) => {
        if (currentSubTab !== tab) {
            setCurrentSubTab(tab);
        }
    }

    return (
        <Element name='about'>
            <Container className='fluid mt-2' style={{ caretColor: 'transparent'}} >
                    <h1 id='about'>About</h1>
                    <hr />
                <Row className='my-4'>
                    <Col sm='4' className='mt-2 fluid d-flex justify-content-center align-items-center'>
                        <img src={ProfilePicture} alt="Ryen Masters" className="img-fluid rounded-circle mb-4" style={{ width: '200px', height: '200px' }} />
                    </Col>
                    <Col className='mt-2 fluid flex justify-content-center align-items-center'>
                        <div>
                            <Nav tabs justified>
                                <NavItem>
                                    <NavLink
                                        className='tab text-light'
                                        active={currentTab === '1'}
                                        onClick={() => toggleTab('1')}
                                        style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                    >
                                        About Me
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className='tab text-light'
                                        active={currentTab === '2'}
                                        onClick={() => toggleTab('2')}
                                        style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                        >
                                        Skills
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={currentTab}>
                                <TabPane tabId='1'>
                                    <p style={{ textAlign: 'left' }}>
                                        Hi, My name is Ryen! My interest in web development began, like most people my age, 
                                        when MySpace & FaceBook were taking the web by storm. Surprisingly, the drive to have an extraordinary 
                                        MySpace profile is what originally taught me about HTML & CSS.
                                    </p>
                                    <p style={{ textAlign: 'left' }}>
                                        I had a bit of a renaissance with programming when I was tasked to learn about PLC Ladder Logic 
                                        to assist with manufacturing automation in my last position. Fast forward to present day, 
                                        I decided to go back to school fulltime to follow my dreams of becoming a developer. 
                                        I spent that last year completing my courses and honing my skills to develop exceptional online experiences.
                                    </p>
                                </TabPane>
                                <TabPane tabId='2'>
                                    <Row className='mt-2'>
                                        <Col>
                                            <Nav pills className="flex-column" vertical='sm'>
                                                    <NavItem>
                                                        <NavLink
                                                            className='tab text-light'
                                                            active={currentSubTab === '1'}
                                                            onClick={() => toggleSubTab('1')}
                                                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                                        >
                                                            Programming 
                                                            <br/>
                                                            Languages
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className='tab text-light'
                                                            active={currentSubTab === '2'}
                                                            onClick={() => toggleSubTab('2')}
                                                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                                        >
                                                            Libraries &
                                                            <br />
                                                            Frameworks
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className='tab text-light'
                                                            active={currentSubTab === '3'}
                                                            onClick={() => toggleSubTab('3')}
                                                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                                                        >
                                                            Business 
                                                            <br/>
                                                            Skills
                                                        </NavLink>
                                                    </NavItem>
                                            </Nav>
                                        </Col>
                                        <Col>
                                            <TabContent activeTab={currentSubTab}>
                                                <TabPane tabId='1'>
                                                    <Progress
                                                        className='my-2' 
                                                        value='85'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > JavaScript
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='85'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > TypeScript
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Python
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='70'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > C#
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > HTML
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > CSS / SASS
                                                    </Progress>
                                                </TabPane>
                                                <TabPane tabId='2'>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Node.js
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='85'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > React
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > React Native
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='75'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Redux + RTK
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='75'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Express.js
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='85'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Expo
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Mongoose (MongoDB)
                                                    </Progress>
                                                </TabPane>
                                                <TabPane tabId='3'>
                                                    <Progress
                                                        className='my-2' 
                                                        value='90'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Project Management
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='90'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Communication
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Teamwork
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='90'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Problem Solving
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='75'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > Time Management
                                                    </Progress>
                                                    </TabPane>
                                            </TabContent>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </Element>
    )
}


export default About;
