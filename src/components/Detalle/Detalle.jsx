// import { useState } from 'react'
// import Loading from '../Loading/Loading';
// import axios from 'axios';


// export default function Detalle(props) {
//     // console.log(props,'detaleeee')

//     const [loading, SetLoading] = useState();

    

//     setLoading(true)
//     axios.get(`https://api.spoonacular.com/recipes/${props.id}/card`)
//         .then((respuesta) => {
//             setLoading(false)
//             setRespuestaApi(respuesta.data.results);

//         })
//         .catch((error) => {
//             alert(error);
//             setLoading(false);
//         })

// }