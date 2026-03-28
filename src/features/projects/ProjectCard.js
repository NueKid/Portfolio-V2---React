import { Card, CardImg, CardTitle, CardText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

const ProjectCard = ({ project }) => {
    const { id, image, name, type, isNew, logo } = project;

    return (
        <Link to={`${id}`} style={{ width: '18rem', textDecoration: 'none' }}>
            <Card 
                className={
                    isNew 
                    ? 'bg-secondary text-light card border-2 border-primary'
                    : 'bg-secondary text-light card'}
            >
                {isNew &&
                    <span className='new-tag'>NEW</span>
                }
                <CardImg
                    className='card-image-container'
                    width='100%'
                    src={logo}
                    alt={name}
                />
                    <CardTitle style={{ textDecoration: 'underline' }}>{name}</CardTitle>
                    <CardText>{type}</CardText>
                    <CardText className='pb-2'>
                        {project.tags.map((tag) => (
                        <Badge pill color='primary'>{tag}</Badge>
                    ))}</CardText>
            </Card>
        </Link>
    )
}

export default ProjectCard;
// This component is used to display a project card with an image and title.