import { useEffect, useState } from "react";
import { CatalogoModel } from "../../model/prodotto";
import ProdottoCard from "../prodotto/prodotto-card";

interface IProps {

}

const Catalogo: React.FC<IProps> = (props: IProps): React.ReactElement => {

    const prodotti = [
        {
            id: 1,
            nome: 'Prodotto 1',
            categoria: { id: 101, nome: 'Categoria A' },
            prezzo: 19.99,
            peso: 0.5,
            disponibilita: 10,
            descrizione: 'Descrizione del prodotto 1',
            immagine: 'url_immagine_prodotto_1.jpg',
            materiale: 'Materiale A',
        },
        {
            id: 2,
            nome: 'Prodotto 2',
            categoria: { id: 102, nome: 'Categoria B' },
            prezzo: 29.99,
            peso: 0.7,
            disponibilita: 15,
            descrizione: 'Descrizione del prodotto 2',
            immagine: 'url_immagine_prodotto_2.jpg',
            materiale: 'Materiale B',
        },
        // Aggiungi altri prodotti secondo necessità
    ];

    // Ora puoi utilizzare 'prodotti' come base per il tuo JSON
    const jsonProdotti = JSON.stringify(prodotti, null, 2);
    console.log(jsonProdotti);


    const [listaProdotti, setListaProdotti] = useState<CatalogoModel>([]);
    const getProdotti = () => {
        //fetch('').then(res => res.json()).then((resp: CatalogoModel) => {
        setListaProdotti(prodotti);
        //});
    };
    useEffect(() => {
        getProdotti();
    }, []);

    return (
        <>

            {listaProdotti.map((p, index) => <ProdottoCard key={p.nome + index} prodotto={p} />)}

        </>
    );
};

export default Catalogo;
