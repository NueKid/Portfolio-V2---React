import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col
} from 'reactstrap';
import { useState } from 'react';

const ExperienceTabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <Nav pills vertical justified>
            <Row className='my-4'>
                <Col sm='3'>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '1'}
                            onClick={() => toggle('1')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Hirsch
                            <br/> Pipe
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '2'}
                            onClick={() => toggle('2')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Venus 
                            <br />Group
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className='tab text-light'
                            active={activeTab === '3'}
                            onClick={() => toggle('3')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Bubba Gump
                            <br/>Shrimp Co.
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '4'}
                            onClick={() => toggle('4')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            SoundScape 
                            <br />Studios
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '5'}
                            onClick={() => toggle('5')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Sierra 
                            <br />Printing
                        </NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId='1' className='scrollable-container text-start'>
                            <p>As the <span className='fw-bold'>sole front-end mobile developer</span>, I own the architecture, development, and delivery of a production React Native application used for field operations, customer interaction, and compliance workflows.
                            </p>
                            <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Mobile Application Developer Intern</h5>
                            <h6>Sep 2025 - Current</h6>
                                <ul>
                                    <li>
                                        Independently developed and maintained a cross-platform mobile application using React Native (Expo) for iOS and Android
                                    </li>
                                    <li>
                                        Designed and implemented a real-time chat system (AskJiro agent) using WebSockets, including:
                                        <ul>
                                            <li>
                                                Persistent connection handling and message streaming
                                            </li>
                                            <li>
                                                Integration with Direct Line–style APIs for conversational workflows
                                            </li>
                                            <li>
                                                Full feedback loop for user queries and responses
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Built and optimized Redux Toolkit architecture, including async thunks, normalized state, and reusable data-driven logic
                                    </li>
                                    <li>
                                        Engineered advanced search and filtering systems across nested datasets (orders, bids, products), improving data accessibility and performance
                                    </li>
                                    <li>
                                        Developed dynamic UI features, including:
                                        <ul>
                                            <li>
                                                Template-driven workflows with keyword parsing and interpolation
                                            </li>
                                            <li>
                                                Custom modals, forms, and reusable components
                                            </li>
                                            <li>
                                                Equal-height responsive card layouts and optimized list rendering
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Integrated deep linking to native apps, including:
                                        <ul>
                                            <li>
                                                Phone, email, and address linking
                                            </li>
                                            <li>
                                                Google Maps navigation from in-app location data
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Implemented WebView-based authentication and external flows, including error handling for expired/invalid sessions
                                    </li>
                                    <li>
                                        Built compliance-focused features such as MSDS document access, including secure document viewing via Expo WebBrowser
                                    </li>
                                    <li>
                                        Integrated secure authentication flows, including biometric login (Face ID) and token-based session handling
                                    </li>
                                    <li>
                                        Managed API integrations with robust error handling, retry logic, and user feedback states
                                    </li>
                                    <li>
                                        Diagnosed and resolved production issues, including:
                                        <ul>
                                            <li>
                                                EAS build and signing/certificate errors
                                            </li>
                                            <li>
                                                Platform-specific UI inconsistencies
                                            </li>
                                            <li>
                                                Async data and navigation edge cases
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Owned deployment pipeline using Expo EAS, including build configuration, credential management, and OTA updates
                                    </li>
                                    <li>
                                        Collaborated with backend engineers and stakeholders to define requirements, debug API issues, and deliver end-to-end features
                                    </li>
                                </ul>
                                <br />
                                <h6>Technologies Used</h6>
                                <p>React Native, Expo, Redux Toolkit, TypeScript, WebSockets, REST APIs, Expo EAS, WebView, Expo WebBrowser, Git</p>
                        </TabPane>
                        <TabPane tabId='2' className='scrollable-container text-start'>
                                <p>I was privileged enough to hold multiple positions during my employment at <a href='https://www.venusgroup.com/' target='_blank' className='fw-bolder' style={{ textDecoration: 'none', color: '#0dcaf0'}}>Venus Group</a>.
                                    I spent over 14 years absorbing knowledge and experience in various roles,
                                    which has greatly contributed to my professional growth and expertise.
                                </p>
                                <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Customer Service Manager</h5>
                                <h6>Mar 2021 - June 2024</h6>
                                    <ul>
                                        <li>
                                            Led and managed nationwide customer service team, optimizing operations through SOPs and technology.
                                        </li>
                                        <li>
                                            Increased efficiency by 25% through tech implementation.
                                        </li>
                                        <li>
                                            Reported customer analytics and updates to the executive team.
                                        </li>
                                    </ul>
                                    <br />
                                <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Sales Manager</h5>
                                <h6>Jan 2019 - Mar 2021</h6>
                                    <ul>
                                        <li>
                                            Built the department from the ground up, generating $3.5MM revenue.
                                        </li>
                                        <li>
                                            Secured contracts with US Government and Fortune 500 companies.
                                        </li>
                                        <li>
                                            Collaborated with R&D and cross-functional teams on product innovation.
                                        </li>
                                    </ul>
                                    <br />
                                <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Project Manager</h5>
                                <h6>Aug. 2011 - Jan. 2019</h6>
                                    <ul>
                                        <li>
                                            Delivered major cost-saving projects ($1.2MM+), improving logistics and operations.
                                        </li>
                                        <li>
                                            Managed vendor relations, project timelines, and stakeholder communication.
                                        </li>
                                        <li>
                                            Improved operations and reduced time-to-task by 43% via system audits and enhancements.
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='3' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Retail Associate/Certified Trainer/OSHA Safety Team Assistant Manager</h5>
                                <h6>Oct. 2009 - Aug. 2011</h6>
                                    <ul>
                                        <li>
                                            Developed onboarding programs and managed safety compliance.
                                        </li>
                                        <li>
                                            Managed inventory and maintained accurate tracking within organizational guidelines.
                                        </li>
                                        <li>
                                            Conducted regular safety inspections to identify and resolve workplace hazards.
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='4' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Producer</h5>
                                <h6>Feb 2007 - Dec 2009</h6>
                                    <ul>
                                        <li>
                                            Managed production contracts, budgets, and timelines for multiple clients.
                                        </li>
                                        <li>
                                            Coordinated between artists and technical teams to meet delivery goals.
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='5' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline', color: '#0dcaf0'}}>Customer Service Representative</h5>
                                <h6>July 2006 - Oct 2009</h6>
                                    <ul>
                                        <li>
                                            Maintain existing customer relationships and work to create new customer relationships.
                                        </li>
                                        <li>
                                            Prepare and process quotes, orders, and sample requests.
                                        </li>
                                        <li>
                                            Collaborate with all stakeholders, such as sales representatives, administrative staff, production staff, suppliers, and customers on orders and projects, including pricing, technical specifications, and deadlines.
                                        </li>
                                    </ul>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Nav>
    )
};

export default ExperienceTabs;