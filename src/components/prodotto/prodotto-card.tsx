
import Card from 'react-bootstrap/Card';
import { Prodotto } from "../../model/prodotto";
import ProdottoDettaglio from "./prodotto-dettaglio";

interface IProps {
    prodotto: Prodotto;
}

const ProdottoCard: React.FC<IProps> = (props: IProps): React.ReactElement => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.prodotto.nome}</Card.Title>
                    <Card.Text>
                        {props.prodotto.descrizione}
                    </Card.Text>
                    <ProdottoDettaglio prodotto={props.prodotto} />
                </Card.Body>
            </Card>
        </>
    );
};

export default ProdottoCard;
