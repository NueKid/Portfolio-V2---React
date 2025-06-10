import { Card, CardImg, CardTitle, CardText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, image, name, type, tag } = project
    return (
        <Link to={`${id}`} style={{ width: '18rem', height: '475px', textDecoration: 'none' }}>
            <Card 
                className='bg-secondary text-light'
            >
                <CardImg 
                    width='100%'
                    src={image}
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