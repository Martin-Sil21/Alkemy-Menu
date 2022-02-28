import Platos from '../Platos/Platos'
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Home() {

    const apiKey = process.env.REACT_APP_API_KEY

    const [loading, setLoading] = useState(false)

    const [respuestaApi, setRespuestaApi] = useState([])

    const [menu, setMenu] = useState([])
    
    let navigate = useNavigate()

    useEffect(() => {

        setLoading(true)
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&number=200')
            .then((respuesta) => {
                setLoading(false)
                setRespuestaApi(respuesta.data.results);

            })
            .catch((error) => {
                alert(error);
                setLoading(false);
            })
    }, [])




    function onClick(e) {
        e.preventDefault();
        localStorage.setItem("token", JSON.stringify(''));
        navigate('/')

    }
   

    if (loading === 'true') {
        return <div>
            <Loading />
        </div>
    }

    return <div>

        <Platos menu={menu} />

        <div>
            <h3>Acumulativo del precio del menú</h3>
            <h3>Promedio de tiempo de preparación</h3>
        </div>


        <Link to='/buscador'>
            <button name="buscador">Ir al Buscador</button>
        </Link>


        <button name="cerrarsesion" onClick={onClick} >Cerrar sesión</button>

    </div>


}