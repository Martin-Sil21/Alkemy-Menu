import Detalle from "../Detalle/Detalle"
import Platos from '../Platos/Platos'
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'


export default function Home() {


    let navigate = useNavigate()

    function onClick(e) {
        e.preventDefault();

        console.log(e, 'SOY EL EVENTOOOOOOOOO')

            localStorage.setItem("token", JSON.stringify(''));
            navigate('/')

    }


    return <div>

        <Platos />

        <Link to ='/buscador'>
            <button name="buscador"  >Ir al Buscador</button>
        </Link>


        <button name="cerrarsesion" onClick={onClick} >Cerrar sesión</button>

    </div>


}