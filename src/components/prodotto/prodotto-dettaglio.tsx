import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { ProjectWorkServiceCatalogoBlModelsProdottoDto } from "../../api/generated";

interface IProps {
    prodotto: ProjectWorkServiceCatalogoBlModelsProdottoDto;
}

const ProdottoDettaglio: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Nome: {props.prodotto.nome}</ListGroup.Item>
                        <ListGroup.Item>Descrizione: {props.prodotto.descrizione}</ListGroup.Item>
                        <ListGroup.Item>Categoria: {props.prodotto.categoria?.nome}</ListGroup.Item>
                        <ListGroup.Item>Prezzo: {props.prodotto.prezzo}</ListGroup.Item>
                        <ListGroup.Item>Peso: {props.prodotto.peso}</ListGroup.Item>
                        <ListGroup.Item>Materiale: {props.prodotto.materiale}</ListGroup.Item>
                        <ListGroup.Item>Img: {props.prodotto.immagine}</ListGroup.Item>
                        <ListGroup.Item>Disponibilità: {props.prodotto.disponibilita}</ListGroup.Item>

                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProdottoDettaglio;
