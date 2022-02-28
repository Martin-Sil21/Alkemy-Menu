import axios from "axios"
import { Link } from "react-router-dom"
import Detalle from '../Detalle/Detalle'

export default function Cartas(props) {

    // Home de la aplicación mostrará los platos del menú en un listado. Cada ítem (el cuál debe ser un
    //     componente separado) del listado contendrá:
    //     ● Nombre del plato.
    //     ● Imagen.
    //     ● Características del plato.
    //     ● Acciones para ver el detalle o eliminarlo del menú.


    // let arrayRecetasApi = props.respuestaApi

    console.log(props,'PROPPPOSAODPASDAD') 

    return <div>

        <h3>{props.nombrePlato}</h3>
        <img src={props.imagen} alt="Url no encontrada" />
        <h5>características del plato</h5>
        <Link to='/detalle'>
            <button>ir al detalle</button>
        </Link>
        <Detalle id={props.id} />
        <button>eliminarlo del menú</button>
        
        {/* <div class="card" style="width: 18rem;">
            <img src={props.imagen} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.nombrePlato}</h5>
                    <p class="card-text">{props.resumen}</p>
                    <a href="/detalle" class="btn btn-primary">Ir al detalle</a>
                </div>
        </div> */}



    </div>

}