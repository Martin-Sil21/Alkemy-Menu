import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import LogIn from   "./components/LogIn/Login"
import Buscador from './components/Buscador/Buscador'



export default function App() {

    return <div>


        <BrowserRouter>
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<LogIn />} path='/logIn' />
                <Route element={<Buscador />} path='/buscador' />
                
            </Routes>
        </BrowserRouter>
    </div>

 


}
