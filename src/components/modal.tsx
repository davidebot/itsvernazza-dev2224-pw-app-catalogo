import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Titolo del Modale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>provaaaaaa</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyComponent;
