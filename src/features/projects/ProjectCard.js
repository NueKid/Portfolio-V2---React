import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

const ProjectCard = ({ project }) => {
    return (
        <Card style={{ width: '18rem', height: '475px' }}>
            <CardImg 
                width='100%'
                src={project.image}
                alt={project.name}
            />
                <CardTitle>{project.name}</CardTitle>
                <CardText>{`Type: ${project.type}`}</CardText>
                <CardText>
                    Tags:
                    {project.tags.map((tag) => (
                    tag.length > 1
                        ? ` ${tag}, `
                        : ` ${tag}`
                ))}</CardText>
        </Card>
    )
}

export default ProjectCard;
// This component is used to display a project card with an image and title.