import Card from 'react-bootstrap/Card';
import Menu from './menu/menu';


interface IProps {
    setIdCategoria: (id: number) => void;
}

const Header: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setIdCategoria } = props;
    return (
        <Card>
            <Card.Img variant="top" src="./header.jpg" />
            <Card.Body>
                <Card.Text>
                    <Menu setIdCategoria={setIdCategoria} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default Header;
