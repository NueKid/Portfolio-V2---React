import LitClubLogo from '../assets/img/LitClubLogoSquare.png';
import LitClubWebMobile from '../assets/img/LitClubWebMobile.png';
import LitClubReader from '../assets/img/LitClubReader.png';

export const PROJECTS = [
    {
        id: 0,
        name: 'Literature Club', 
        logo: LitClubLogo,
        image: [LitClubWebMobile, LitClubReader],
        type: 'Frontend Web + Mobile App',
        description: 'A Web & Mobile platform for book lovers to share and discuss their favorite literature. Explore trending books or browse your favorite genres. Manage your own library and track your progress through your personal Reading List.',
        tags: ['React', 'React Native', 'Redux', 'Express', 'OpenLibrary API'],
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
        image: [LitClubWebMobile, LitClubReader],
        type: 'Backend Server + API',
        description: 'Testing ID 1',
        tags: ['Node.js', 'MongoDB', 'Express', 'Mongoose', 'JWT', 'Passport.js'],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient'
            },
            {
                app: 'Backend API',
                url: 'https://github.com/NueKid/literatureclubServer'
            },
            {
                app: 'Frontend Mobile Client',
                url: 'https://github.com/NueKid/literatureclubMobileClient'
            }
        ]
    },
    {
        id: 2,
        name: 'Portfolio Website V2',
        logo: LitClubLogo,
        image: [LitClubWebMobile, LitClubReader],
        type: 'Frontend Web App',
        description: 'Testing ID 2',
        tags: ['React', 'Node.js', 'Redux', 'Bootstrap'],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient'
            },
            {
                app: 'Backend API',
                url: 'https://github.com/NueKid/literatureclubServer'
            },
            {
                app: 'Frontend Mobile Client',
                url: 'https://github.com/NueKid/literatureclubMobileClient'
            }
        ]
    }
]