import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import LogIn from   "./components/LogIn/Login"
import Buscador from './components/Buscador/Buscador'
import { useState } from 'react';


export default function App() {


    const [token, setToken] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("token");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });


  

        return <div>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/Home' />
                <Route element={<LogIn />} exact path='/' />
                <Route element={<Buscador />} path='/buscador' />
                
            </Routes>
        </BrowserRouter>
    </div>
    
    

   

 


}
