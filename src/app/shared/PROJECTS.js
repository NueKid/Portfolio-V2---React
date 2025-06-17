import LitClubLogo from '../assets/img/LitClubLogoSquare.png';
import LitClubWebMobile from '../assets/img/LitClubWebMobile.png';
import LitClubReader from '../assets/img/LitClubReader.png';
import PortfolioSC from '../assets/img/PortfolioSC.png'
import LitClubServerUsers from '../assets/img/LitClubServerUsers.png';
import AuthMongo from '../assets/img/AuthMongo.png';

export const PROJECTS = [
    {
        id: 0,
        name: 'Literature Club', 
        logo: LitClubLogo,
        image: [LitClubWebMobile, LitClubReader],
        type: 'Frontend Web + Mobile App',
        description: 'A Web & Mobile platform for book lovers to share and discuss their favorite literature. Explore trending books or browse your favorite genres. Manage your own library and track your progress through your personal Reading List.',
        tags: ['React', 'React Native', 'Redux', 'Express', 'OpenLibrary API'],
        copy: ['Quickly and easily add books to your Reading List. Find the best online shops to purchase physical media or audio books. Or read your favorite titles online with our eReader!', 'Test'],
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
        id: 1,
        name: 'Literature Club Server',
        logo: LitClubLogo,
        image: [LitClubServerUsers, AuthMongo],
        type: 'Backend Server + API',
        description: 'A backend server with RESTful API for managing user accounts, reviews, reading lists and libraries. Devloped with Node.js, MongoDB and Express.',
        tags: ['Node.js', 'MongoDB', 'Express', 'Mongoose', 'JWT', 'Passport.js'],
        copy: ['Utilizing JWT with Salt and Hash for data encryption. Additionally, Passport.js has been implemented to allow account creation through FaceBook Login, with more to come.'],
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
        id: 2,
        name: 'Portfolio Website V2',
        logo: PortfolioSC,
        image: [PortfolioSC],
        type: 'Frontend Web App',
        description: 'This is the second iteration of my portolfio app. The original was made with only HTML, CSS & Bootstrap. This version has been recreated with React, Node.js, and custom SASS sprinkled in.',
        tags: ['React', 'Node.js', 'Redux', 'Bootstrap', 'SASS', 'React-Spring'],
        github: [
            {
                app: 'Portfolio V2',
                url: 'https://github.com/NueKid/Portfolio-V2---React'
            }
        ]
    }
]