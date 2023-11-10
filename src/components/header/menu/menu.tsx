import { Button, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { bffServiceApiBase } from "../../../api/generated";


interface IProps {
    setIdCategoria: (id: number) => void;
}

const Menu: React.FC<IProps> = (props: IProps): React.ReactElement => {
    const { setIdCategoria } = props;

    const { data: listCategorie, isLoading, isFetching } = bffServiceApiBase.useGetApiV1PwServiceCatalogoCategoriaQuery();

    return (
        (isLoading || isFetching) ? (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        ) : (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">pW-eCommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                                <Button variant="link" className="w-100" onClick={() => setIdCategoria(0)}>Tutti i prodotti</Button>
                                <NavDropdown title="Categorie" id="nested-dropdown">
                                    {listCategorie?.map((categoria, index) => (
                                        <NavDropdown.Item onClick={() => setIdCategoria(categoria.id ?? 0)}>
                                            {categoria.nome}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    );
};

export default Menu;
