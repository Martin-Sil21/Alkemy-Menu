import Cartas from "../Cartas/Cartas"



export default function Platos(props) {

  

    // console.log(props.respuestaApi.results)
    // console.log(props,'PROPSSS')

    return <Cartas respuestaApi={props.respuestaApi.results} />

}