import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, image, name, type, tag } = project
    return (
        <Link to={`${id}`} style={{ width: '18rem', height: '475px', textDecoration: 'none' }}>
            <Card 
                className='text-dark'
            >
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                    <CardTitle>{name}</CardTitle>
                    <CardText>{`Type: ${type}`}</CardText>
                    <CardText>
                        Tags: 
                        {project.tags.map((index, tag) => (
                        <span key={index}>{ (tag ? ', ' : ' ') + index }</span>
                    ))}</CardText>
            </Card>
        </Link>
    )
}

export default ProjectCard;
// This component is used to display a project card with an image and title.