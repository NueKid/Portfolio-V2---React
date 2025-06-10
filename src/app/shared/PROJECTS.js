import LitClubLogo from '../assets/img/LitClubLogoSquare.png';

export const PROJECTS = [
    {
        id: 0,
        name: 'Literature Club',
        image: LitClubLogo,
        type: 'Frontend Web + Mobile App',
        description: 'A platform for book lovers to share and discuss their favorite literature. Every page is an adventure.',
        tags: ['React', 'React Native', 'Redux', 'Express', 'OpenLibrary API'],
        github: [
            {
                app: 'Frontend Web Client',
                url: 'https://github.com/NueKid/literatureclubWebClient', 
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
        id: 1,
        name: 'Literature Club Server',
        image: LitClubLogo,
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
        image: LitClubLogo,
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