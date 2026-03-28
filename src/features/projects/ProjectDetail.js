import { Container, Row, Col } from 'reactstrap';

const ProjectDetail = ({ project }) => {
    const { 
        id, 
        overviewTitle, 
        overviewCopy, 
        subArticleTitle,
        subArticle,
        name, 
        description, 
        image, 
        github, 
        copy,
    } = project;

    return (
        <Container className='fluid mt-2' style={{ minHeight: '80vh', caretColor: 'transparent'}}>
            <h1>{name}</h1>
            <hr/>
            {
                overviewTitle && (
                    <Row style={{ whiteSpace: 'pre-line' }}>
                        <p>{overviewCopy}</p>
                    </Row>
                )
            }
            {
                subArticleTitle && (
                    <Row style={{ whiteSpace: 'pre-line' }}>
                        <h3>{subArticleTitle}</h3>
                        <p>{subArticle}</p>
                    </Row>
                )
            }
            {
                description && (
                    <Row className='align-items-center'>
                        <Col style={{ whiteSpace: 'pre-line' }}>
                            {description}
                        </Col>
                        <Col>
                            <img src={image[0]} alt={name} className='dropImg' style={{ width: '100%', borderRadius: 10 }} />
                        </Col>
                    </Row>
                )
            }
            {copy && (
                copy.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Row className='mt-2 align-items-center' style={{ whiteSpace: 'pre-line' }}>
                                <Col className="d-flex justify-content-center align-items-center">
                                    <p>{item}</p>
                                </Col>
                                <Col className="d-flex justify-content-center align-items-center">
                                    <div
                                        className={image[index].type === 'gif' ? 'gif-container' : ''}
                                        key={index}
                                    >
                                        <img
                                            src={image[index].src} 
                                            alt={name} 
                                            className={image[index].type === 'gif' ? 'gif-style' : 'img'}
                                            style={{ width: '100%', borderRadius: 10  }} 
                                        />
                                    </div>
                                </Col>
                            </Row>
                        )
                    }
                    if (!index % 2 === 0) {
                        return (
                            <Row className='mt-2 align-items-center' style={{ whiteSpace: 'pre-line' }}>
                                <Col className="d-flex justify-content-center align-items-center">
                                    <div
                                        className={image[index].type === 'gif' ? 'gif-container' : ''}
                                        key={index}
                                    >
                                        <img
                                            src={image[index].src} 
                                            alt={name} 
                                            className={image[index].type === 'gif' ? 'gif-style' : 'img'}
                                            style={{ width: '100%', borderRadius: 10  }} 
                                        />
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-center align-items-center">
                                    <p>{item}</p>
                                </Col>
                            </Row>
                        )
                    }
                })
            )}
            <hr />
            <Row className='align-items-center mt-4'>
                <p style={{ fontWeight: 'bold' }}>View this project on Github <i className='fa fa-github fa-lg text-light' /></p>
                    <ul style={{ listStyleType: 'none'}}>
                    {github.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.url}
                                target='_blank'
                            >
                            {item.app}
                            </a>
                        </li>
                    ))}
                    </ul>
            </Row>
        </Container>
    )
}

export default ProjectDetail;
