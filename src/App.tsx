import { useState } from "react";
import './App.scss';
import Catalogo from "./components/catalogo/catalogo";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {

    const [idCategoria, setIdCategoria] = useState<number>(0);

    return (

        <div className="app">
            <Header setIdCategoria={setIdCategoria} />
            <Catalogo idCategoria={idCategoria} />
            <Footer />
        </div>


    );
};


export default App;
