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

const About = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const toggleTab = (tab) => {
        if (currentTab !== tab) {
            setCurrentTab(tab);
        }
    }

    return (
        <Container className='fluid mt-2'>
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
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default About;
