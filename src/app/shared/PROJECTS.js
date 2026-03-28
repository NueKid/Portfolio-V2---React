import LitClubLogo from '../assets/img/LitClubLogoSquare.png';
import LitClubWebMobile from '../assets/img/LitClubWebMobile.png';
import LitClubReader from '../assets/img/LitClubReader.png';
import PortfolioSC from '../assets/img/PortfolioSC.png'
import LitClubServerUsers from '../assets/img/LitClubServerUsers.png';
import AuthMongo from '../assets/img/AuthMongo.png';
import HNELogo from '../assets/img/Hirschnow.png';
import dashboardNav from '../assets/img/DashboardNav.gif';
import LoginScreen from '../assets/img/LoginScreen.gif';
import DrawerNavFilter from '../assets/img/DrawerNavSearchSort.gif';
import OrderDetail from '../assets/img/OrderDetailsFunctions.gif';
import DeleteFunction from '../assets/img/SwipeToDelete.gif';
import BidScreen from '../assets/img/BidFunctions.gif';
import CustomerCRM from '../assets/img/CustomersCRM.gif';
import Locations from '../assets/img/Locations.gif';
import MSDS from '../assets/img/MSDS.gif';
import AskJiro from '../assets/img/AskJiro.gif';

export const PROJECTS = [
    {
        id: 'HirschEmployee',
        name: 'Hirsch Employee App', 
        logo: HNELogo,
        image: [
            { src: LoginScreen, type: 'gif'}, 
            { src: dashboardNav, type: 'gif'},
            { src: DrawerNavFilter, type: 'gif'},
            { src: DeleteFunction, type: 'gif'},
            { src: OrderDetail, type: 'gif'},
            { src: BidScreen, type: 'gif'},
            { src: CustomerCRM, type: 'gif'},
            { src: Locations, type: 'gif'},
            { src: MSDS, type: 'gif'},
            { src: AskJiro, type: 'gif'},
        ],
        type: 'Mobile App',
        isNew: true,
        overviewTitle: 'Hirsch App — Project Overview',
        overviewCopy: 
            `The Hirsch Employee App (built entirely in TypeScript) is a mobile-first solution designed to streamline order management, bidding workflows, and field operations into a single, intuitive interface. Built with a focus on usability and performance, the app enables users to quickly access order data, submit bids, and capture critical information in real time.
            \nAt its core, the app simplifies complex workflows. Users can search and filter through large datasets, view detailed order information, and take action without friction. Key interactions—like uploading signatures, navigating between nested data, and handling live updates—are designed to feel fast and seamless.
            \nThe interface prioritizes clarity and efficiency. Each screen is purpose-built, whether it’s reviewing order details, managing bids, or capturing user input. The result is a tool that reduces operational overhead and helps users focus on completing tasks rather than navigating the system.`,
        subArticleTitle: 'Architecture & Tech',
        subArticle: 
            `Under the hood, the Hirsch App is built for scalability, maintainability, and real-world reliability.
            \nState management is handled with Redux, allowing for a predictable and centralized data flow across the app. This was especially important for managing complex, nested data structures like orders and associated bid items, as well as keeping UI state in sync with asynchronous operations.
            \nThe app is built using Expo, enabling rapid development and a consistent cross-platform experience. With EAS (Expo Application Services), the build and deployment process is streamlined, making it easy to manage certificates, provisioning profiles, and over-the-air updates without disrupting users.
            \nA strong emphasis was placed on robust error handling and async workflows. Network requests, uploads, and real-time interactions are designed to gracefully handle failures while providing clear feedback to the user.
            \nAdditionally, reusable and data-agnostic utilities—such as advanced search and filtering functions—were implemented to support scalability as the dataset grows. These abstractions make it easier to extend functionality without rewriting core logic.
            \nOverall, the architecture balances developer experience with production reliability, ensuring the app is both easy to maintain and ready to scale.`,
        description: '',
        tags: [ 'TypeScript', 'React Native', 'Redux', 'Expo',],
        copy: [
            `Authentication is handled through a secure, token-based login flow that maintains session integrity across the app. The experience is designed to be straightforward and reliable, ensuring consistent access to user-specific data.`,
            `The dashboard serves as the central hub of the app, giving users a quick snapshot of performance and priorities. Key metrics like weekly Sell-A-Thon progress and year-to-date sales are surfaced immediately, along with a dynamic to-do list to guide daily tasks.
            \nNavigation is designed to be fast and intuitive, allowing users to seamlessly move between core features such as Sell-A-Thon tracking, detailed sales reports, and task management. The goal is to minimize friction—users can access critical information and take action within just a few taps.`, 
            `The order reports section provides users with a detailed, searchable view of order data, accessible through a streamlined drawer navigation. From here, users can quickly drill into large datasets without losing context.
            \nA reusable, data-agnostic filtering system powers the experience, allowing complex queries across nested data structures. The filtering modal enables users to refine results dynamically, making it easy to locate specific orders as data scales.`,
            `The order list supports gesture-based interactions, including swipe-to-delete for efficient order management. This enables users to take immediate action without navigating away from the list.
            \nA confirmation modal with structured input enforces validation and captures deletion reasons, ensuring data integrity while supporting auditability within the system.`,
            `The order details screen provides a structured view of order data, combining high-level summaries with access to nested product information. The interface supports dynamic rendering of product lists and associated metadata.
            \nAdditional functionality includes a full-screen image modal for product previews and integrated sharing capabilities, allowing users to quickly distribute product details. These features are designed to enhance usability while maintaining performance across complex data structures.`,
            `The bids view builds on the same core functionality as the orders system, including search, filtering, and detailed data views, while introducing additional tools tailored to the sales process.
            \nA dedicated follow-up feature allows users to take action on active bids directly from the list view. This enables quick outreach and helps ensure opportunities don’t fall through the cracks, turning the app into a more proactive sales tool rather than just a reporting interface.`,
            `The customer module connects reporting, detailed customer views, and CRM functionality into a unified workflow. Users can navigate from high-level reports into individual customer data while maintaining context across screens.
            \nCRM entry includes follow-up creation with calendar integration, leveraging Expo-based date handling to manage scheduled interactions. This allows for structured tracking of customer engagement while keeping all related data centralized within the app.`,
            `The locations module integrates with native device functionality to enable direct interaction with contact and address data. Users can trigger phone calls, emails, and map navigation through deep linking into platform-specific applications.
            \nThis approach bridges in-app data with external services such as mapping providers, allowing for efficient transitions between the app and essential tools without additional user input.`,
            `The MSDS module delivers centralized access to safety and compliance documents, ensuring users can quickly reference required information within the app.
            \nExternal documents are rendered using Expo’s WebBrowser integration, enabling secure, in-app access to hosted resources. This allows for real-time document updates while maintaining a cohesive user experience.`,
            `AskJiro is an integrated virtual assistant that implements a real-time chat interface backed by WebSocket communication, enabling low-latency, bidirectional messaging between the client and the conversational service.
            \nThe system integrates with the Direct Line API to manage conversation lifecycles, including token retrieval, connection initialization, and message streaming. This architecture supports a complete feedback loop, where user input is processed and returned as contextual responses in near real time.
            \nThe implementation emphasizes asynchronous handling, connection management, and error resilience to ensure a stable chat experience within a mobile application.`,
        ],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient', 
            },
            {
                app: 'Frontend Mobile Client',
                url: 'https://github.com/NueKid/literatureclubMobileClient'
            },
            {
                app: 'Backend Server & API',
                url: 'https://github.com/NueKid/literatureclubServer'
            }
        ]
    },
    {
        id: 'LiteratureClub',
        name: 'Literature Club', 
        logo: LitClubLogo,
        image: [
            { src: LitClubWebMobile, type: 'image'}, 
            { src: LitClubReader, type: 'image'}
        ],
        type: 'Frontend Web + Mobile App',
        new: false,
        description: '',
        tags: ['React', 'React Native', 'Redux', 'Express', 'OpenLibrary API'],
        copy: [
            'A Web & Mobile platform for book lovers to share and discuss their favorite literature. Explore trending books or browse your favorite genres. Manage your own library and track your progress through your personal Reading List.',
            'Quickly and easily add books to your Reading List. Find the best online shops to purchase physical media or audio books. Or read your favorite titles online with our eReader!',
        ],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient', 
            },
            {
                app: 'Frontend Mobile Client',
                url: 'https://github.com/NueKid/literatureclubMobileClient'
            },
            {
                app: 'Backend Server & API',
                url: 'https://github.com/NueKid/literatureclubServer'
            }
        ]
    },
    {
        id: 'LiteratureClubServer',
        name: 'Literature Club Server',
        logo: LitClubLogo,
        image: [
            { src: LitClubServerUsers, type: 'image'}, 
            { src: AuthMongo, type: 'image'},
        ],
        type: 'Backend Server + API',
        new: false,
        description: '',
        tags: ['Node.js', 'MongoDB', 'Express', 'Mongoose', 'JWT', 'Passport.js'],
        copy: [
            'A backend server with RESTful API for managing user accounts, reviews, reading lists and libraries. Developed with Node.js, MongoDB and Express.',
            'Utilizing JWT with Salt and Hash for data encryption. Additionally, Passport.js has been implemented to allow account creation through Facebook Login, with more to come.'
        ],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient', 
            },
            {
                app: 'Frontend Mobile Client',
                url: 'https://github.com/NueKid/literatureclubMobileClient'
            },
            {
                app: 'Backend Server & API',
                url: 'https://github.com/NueKid/literatureclubServer'
            }
        ]
    },
    {
        id: 'PortfolioWebsiteV2',
        name: 'Portfolio Website V2',
        logo: PortfolioSC,
        image: [
            { src: PortfolioSC, type: 'image'},
        ],
        type: 'Frontend Web App',
        new: false,
        description: '',
        tags: ['React', 'Node.js', 'Redux', 'Bootstrap', 'SASS', 'React-Spring'],
        copy: [
            'This is the second iteration of my portfolio app. The original was made with only HTML, CSS & Bootstrap. This version has been recreated with React, Node.js, and custom SASS sprinkled in.'
        ],
        github: [
            {
                app: 'Portfolio V2',
                url: 'https://github.com/NueKid/Portfolio-V2---React'
            }
        ]
    },
]