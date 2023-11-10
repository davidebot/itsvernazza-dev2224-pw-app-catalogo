import { Col, Row, Spinner } from "react-bootstrap";
import { bffServiceApiBase } from "../../api/generated";
import ProdottoCard from "../prodotto/prodotto-card";

interface IProps {
    idCategoria: number,
}

const Catalogo: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const { data: listProdotti, isLoading, isFetching } = bffServiceApiBase.useGetApiV1PwServiceCatalogoProdottoQuery({ idCategoria: props.idCategoria });

    return (
        <>
            {(isLoading || isFetching) ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {listProdotti?.map((prodotto, index) => (
                        <Col key={index}>
                            <ProdottoCard prodotto={prodotto} />
                        </Col>
                    )
                    )}
                </Row>
            )}
        </>
    );
};
export default Catalogo;
