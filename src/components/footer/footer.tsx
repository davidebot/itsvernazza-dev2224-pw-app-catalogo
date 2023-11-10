import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

interface IProps {

}

const Footer: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <>
            <div className="fixed-bottom">
                <Row>
                    <Col sm>About us</Col>
                    <Col sm>Contatti</Col>
                    <Col sm>News</Col>
                </Row>
            </div>
        </>
    );
};

export default Footer;
