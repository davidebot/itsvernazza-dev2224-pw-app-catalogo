import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


interface IProps {
    setIdCategoria: (id: number) => void;
}

const Menu: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setIdCategoria } = props;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">pW-eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                        <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                            <Button onClick={() => setIdCategoria(0)}>Tutti i prodotti</Button>
                            <NavDropdown title="Categorie" id="nested-dropdown" style={{ paddingLeft: "5%" }}>
                                <NavDropdown.Item onClick={() => setIdCategoria(1)}>
                                    Categoria 1
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setIdCategoria(2)}>
                                    Categoria 2
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setIdCategoria(3)}>
                                    Categoria 3
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setIdCategoria(4)}>
                                    Categoria 4
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setIdCategoria(5)}>
                                    Categoria 5
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
