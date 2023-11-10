import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface IProps {

}

const Catalogo: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Nome Catalogo</Card.Title>
                <Card.Text>
                    TESTO CATALOGO
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};
export default Catalogo;
