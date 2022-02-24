import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function LogIn() {


    const initialState = {
        email: '',
        password: ''
    }


    let navigate = useNavigate()

    const [inputs, setInputs] = useState(initialState);

    const [loading, setLoading] = useState(false)

    // const [token, setToken] = useState('')

    const [token, setToken] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("token");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });


    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token));
    }, [token])



    function onChange(e) {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (inputs.email === '') alert('Campo email vacio')
        else if (inputs.password === '') alert('Campo password vacio')
        else {
            setLoading(true)

            axios.post('http://challenge-react.alkemy.org/', inputs)

                .then((respuesta) => {

                    //respuesta token a redux
                    setLoading(false)
                    setToken(respuesta.data.token)
                    return navigate('/Home')
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error, 'ERRORRRr');
                })
        }
        // if (token !== '') {


        //     return navigate('/Home')

        // }

    }




    return <form onSubmit={(e) => onSubmit(e)}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input onChange={(e) => onChange(e)} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input onChange={(e) => onChange(e)} name='password' type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
}