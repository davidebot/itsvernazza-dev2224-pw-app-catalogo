
import Card from 'react-bootstrap/Card';
import { ProjectWorkServiceCatalogoBlModelsProdottoDto } from "../../api/generated";
import ProdottoDettaglio from "./prodotto-dettaglio";

interface IProps {
    prodotto: ProjectWorkServiceCatalogoBlModelsProdottoDto;
}

const ProdottoCard: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { prodotto } = props;

    return (
        <>
            <Card>
                <Card.Img variant="top" src={prodotto.immagine ?? ""} />
                <Card.Body>
                    <Card.Title>{prodotto.nome}</Card.Title>
                    <Card.Text>
                        {prodotto.descrizione}
                    </Card.Text>
                    <ProdottoDettaglio prodotto={prodotto} />
                </Card.Body>
            </Card>
        </>
    );
};

export default ProdottoCard;
