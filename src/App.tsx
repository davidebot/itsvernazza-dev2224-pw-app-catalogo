import { useState } from "react";
import './App.scss';
import Header from "./components/header/header";

function App() {

    const [idCategoria, setIdCategoria] = useState<number>(0);
    return (

        <div className="app">
            <Header setIdCategoria={setIdCategoria} />
            {idCategoria}

        </div>


    );
}

export default App;
