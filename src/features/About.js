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
                <Row>
                    <Col className='mt-2 fluid d-flex justify-content-center align-items-center'>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum.
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
                                                        value='65'
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
                                                    > CSS
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='60'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > SASS
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
                                                    > Express.js
                                                    </Progress>
                                                    <Progress
                                                        className='my-2' 
                                                        value='80'
                                                        color='primary'
                                                        style={{ height: '30px'}}
                                                    > MongoDB
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
