import { useState } from "react";
import './App.scss';
<<<<<<< HEAD
import Catalogo from "./components/catalogo/catalogo";
=======
>>>>>>> 82a0bf4e469525122d7d57888d72fe6a57267b7e
import Header from "./components/header/header";

function App() {

<<<<<<< HEAD
    return (
        <>
            <Catalogo />
            <Header />
        </>
=======
    const [idCategoria, setIdCategoria] = useState<number>(0);
    return (

        <div className="app">
            <Header setIdCategoria={setIdCategoria} />
            {idCategoria}

        </div>


>>>>>>> 82a0bf4e469525122d7d57888d72fe6a57267b7e
    );
};


export default App;
