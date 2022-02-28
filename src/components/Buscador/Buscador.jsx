import { useState, useEffect } from 'react'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
import Swal from 'sweetalert2'
import Cartas from '../Cartas/Cartas'
import Loading from '../Loading/Loading'
import ReactPaginate from 'react-paginate'

export default function Buscador() {

    // const [input, setInput] = useState('')

    const [respuestaApi, setRespuestaApi] = useState([])

    const [respuestaBusqueda, setRespuestaBusqueda] = useState([])

    const [loading, setLoading] = useState(false)


    // useEffect(() => {
    //     console.log('USEEFEEECT')
    //     setLoading(true)
    //     axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&number=1000')
    //         .then((respuesta) => {
    //             setLoading(false)
    //             setRespuestaApi(respuesta.data.results);

    //         })
    //         .catch((error) => {
    //             alert(error);
    //             setLoading(false);
    //         })
    // }, [])



    // function onChange(e) {
    //     e.preventDefault();
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     });
    // }


    if (loading === true) return <div>

        <Loading />

    </div>
    else return <div>
        <h1>Buscar</h1>
        <Formik
            initialValues={{ input: '' }}
            onSubmit={
                (values) => {
                    // console.log(values.input, 'input ')
                    if (values.input.length < 3) {
                        Swal.fire(
                            'Revise lo ingresado e intente nuevamente',
                            'Recordá que hay que ingresar un mínimo de 3 caracteres',
                            'question'
                        )
                    }
                    else {

                        // setRespuestaBusqueda(respuestaApi.filter(receta => receta.title.includes(values.input)))
                        setLoading(true)
                        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&number=200&query=' + values.input)
                            .then((respuesta) => {
                                setLoading(false)
                                setRespuestaApi(respuesta.data.results);

                            })
                            .catch((error) => {
                                alert(error);
                                setLoading(false);
                            })

                    }
                }
            }
        >

            <Form>
                <label htmlFor="Buscar recetas"></label>
                <Field name='input' type='text' placeholder='Ingresar al menos 3 letras  '></Field>
                <p></p>
                <button type='submit' >Buscar </button>
            </Form>

        </Formik>
        <div>
            {/* {console.log(respuestaApi, '456456454654')} */}
            {respuestaApi.map(receta => {
                return <Cartas
                nombrePlato = {receta.title} 
                imagen = {receta.image}
                id = {receta.id}
                resumen = {receta.summary}
                />
            })}
        </div>
    </div >
} 