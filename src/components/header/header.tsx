<<<<<<< HEAD
import Menu from "./menu/menu";

interface IProps {
=======
import Card from 'react-bootstrap/Card';
import Menu from './menu/menu';
>>>>>>> 82a0bf4e469525122d7d57888d72fe6a57267b7e


interface IProps {
    setIdCategoria: (id: number) => void;
}

const Header: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setIdCategoria } = props;
    return (
<<<<<<< HEAD
        <>
            <Menu />
        </>
=======
        <Card>
            <Card.Img variant="top" src="./header.jpg" />
            <Card.Body>
                <Card.Text>
                    <Menu setIdCategoria={setIdCategoria} />
                </Card.Text>
            </Card.Body>
        </Card>
>>>>>>> 82a0bf4e469525122d7d57888d72fe6a57267b7e
    );
};
export default Header;
