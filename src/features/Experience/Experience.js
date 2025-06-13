import { Container, Row, Col} from "reactstrap";
import ExperienceTabs from "./ExperienceTabs";
import { Element } from "react-scroll";

const Experience = () => {
    return (
        <Element name="experience">
            <Container className="fluid mt-2">
                <h1>Experience</h1>
                <hr />
                    <ExperienceTabs />
                <hr/>
            </Container>
        </Element>
    )
}

export default Experience;