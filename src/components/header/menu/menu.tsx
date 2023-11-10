import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface IProps {

}

const Menu: React.FC<IProps> = (props: IProps): React.ReactElement => {

    return (
        <>
            <Navbar expand="lg" className="navbar navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href="#home">Catalogo App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Prodotti</Nav.Link>
                            <NavDropdown title="Categoria" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Categoria 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
