import Detalle from "../Detalle/Detalle"
import Platos from '../Platos/Platos'
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Home() {


    const [loading, setLoading] = useState(false)

    const [respuestaApi, setRespuestaApi] = useState([])


    useEffect(() => {

        setLoading(true)
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=401cb8389d2342098bfa4889b3e1d10a&addRecipeInformation=true&number=200')
            .then((respuesta) => {
                setLoading(false)
                setRespuestaApi(respuesta.data);

            })
            .catch((error) => {
                alert(error);
                setLoading(false);
            })
    }, [])

    let navigate = useNavigate()

    function onClick(e) {
        e.preventDefault();

        localStorage.setItem("token", JSON.stringify(''));
        navigate('/')

    }



    return <div>

        <Platos respuestaApi={respuestaApi} />

        <Link to='/buscador'>
            <button name="buscador"  >Ir al Buscador</button>
        </Link>


        <button name="cerrarsesion" onClick={onClick} >Cerrar sesión</button>

    </div>


}