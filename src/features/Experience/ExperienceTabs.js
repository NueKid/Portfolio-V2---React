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
            <Row>
                <Col sm='3'>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '1'}
                            onClick={() => toggle('1')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Venus 
                            <br />Group
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className='tab text-light'
                            active={activeTab === '2'}
                            onClick={() => toggle('2')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            Bubba Gump
                            <br/>Shrimp Co.
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '3'}
                            onClick={() => toggle('3')}
                            style={{ cursor: 'pointer', caretColor: 'transparent'}}
                        >
                            SoundScape 
                            <br />Studios
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className='tab text-light'
                            active={activeTab === '4'}
                            onClick={() => toggle('4')}
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
                                <p>I was privileged enough to hold multiple positions during my employment at <a href='https://www.venusgroup.com/' target='_blank' className='text-info fw-bolder' style={{ textDecoration: 'none'}}>Venus Group</a>.
                                    I spent over 14 years absorbing knowledge and experience in various roles,
                                    which has greatly contributed to my professional growth and expertise.
                                </p>
                                <h5 style={{ textDecoration: 'underline'}}>Customer Service Manager</h5>
                                <h6>Mar 2021 - June 2024</h6>
                                    <ul>
                                        <li>
                                            Manage both on-site and remote customer service team members nationwide.
                                        </li>
                                        <li>
                                            Developed and implemented new services, Standard Operating Procedures(SOP) and technologies.
                                        </li>
                                        <li>
                                            Provide the executive team with detailed analytics of overall customer experience, project updates and timelines, and any departmental concerns.
                                        </li>
                                        <li>
                                            Cross-functionally work with sourcing teams, accounting, sales and production teams to ensure operational compliance and heightened customer experience.
                                        </li>
                                    </ul>
                                    <br />
                                <h5 style={{ textDecoration: 'underline'}}>Sales Manager</h5>
                                <h6>Jan 2019 - Mar 2021</h6>
                                    <ul>
                                        <li>
                                            Manage & Direct both inside and outside sales teams nationwide.
                                        </li>
                                        <li>
                                            Develop and implement sales strategies, programs and techniques.
                                        </li>
                                        <li>
                                            Assist the manufacturing team with Research and development of new products.
                                        </li>
                                        <li>
                                            Oversee Projects and ensure they are completed on time and within budget.
                                        </li>
                                        <li>
                                            Cross-functionally work with legal teams, customer service, sales and production teams to ensure contractual compliance.
                                        </li>
                                    </ul>
                                    <br />
                                <h5 style={{ textDecoration: 'underline'}}>Project Manager</h5>
                                <h6>Aug. 2011 - Jan. 2019</h6>
                                    <ul>
                                        <li>
                                            Plan and oversee projects to ensure they are completed within the required timeline and budget.
                                        </li>
                                        <li>
                                            Maintain partnerships with vendors and suppliers to control resources and deliverables.
                                        </li>
                                        <li>
                                            Present project updates to management and/or respective stakeholders.
                                        </li>
                                        <li>
                                            Delegate responsibilities to multi-functional teams, both internal and external.
                                        </li>
                                        <li>
                                            Meet with clients to understand project requirements and scope.
                                        </li>
                                        <li>
                                            Develop project plans, spreadsheets, workflows and process maps to implement new programs.
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='2' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline'}}>Retail Associate/Certified Trainer/OSHA Safety Team Assistant Manager</h5>
                                <h6>Oct. 2009 - Aug. 2011</h6>
                                    <ul>
                                        <li>
                                            Develop standardized product knowledge information for employee onboarding. 
                                            Ensures adequate inventory of materials and products in accordance with inventory cycles and organizational philosophy.
                                        </li>
                                        <li>
                                            Ensure Occupational Safety and Health Act, local health and safety codes, and company safety and security policies are met.
                                        </li>
                                        <li>
                                            Conducts inspections and tracks risks/hazards/discrepancies in accordance with the Corporate Management program.
                                        </li>
                                        <li>
                                            Develop and train all management on the new Environmental Education Training Program (including accident reports and worker's compensation).
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='3' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline'}}>Producer</h5>
                                <h6>Feb 2007 - Dec 2009</h6>
                                    <ul>
                                        <li>
                                            Manage contracts, negotiations and budgets for all projects.
                                        </li>
                                        <li>
                                            Coordinate with Artist teams and internal teams to ensure projects are completed within the required timeline and scope.
                                        </li>
                                        <li>
                                            Plan events or performances for releases. Audio editing, sound design and ghost production as needed.
                                        </li>
                                    </ul>
                        </TabPane>
                        <TabPane tabId='4' className='scrollable-container text-start'>
                            <h5 style={{ textDecoration: 'underline'}}>Customer Service Representative</h5>
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