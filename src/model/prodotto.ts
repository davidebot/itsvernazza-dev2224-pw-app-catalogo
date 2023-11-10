export type CatalogoModel = Prodotto[];

export interface Prodotto {
    id: number;
    nome: string;
    categoria: Categoria;
    prezzo: number;
    peso: number;
    disponibilita: number;
    descrizione: string;
    immagine: string;
    materiale: string;
}

export interface Categoria {
    id: number;
    nome: string;
}
