import { useState } from "react";
import axios from 'axios' 




export default function LogIn() {
    
    const initialState = {
        email:'',
        password:''
    }

    const [inputs, setInputs] = useState(initialState);


    function onChange(e) {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(e,'EVENTOOASDsfdasdfafasfdas')
        if(inputs.email === '') alert('Campo email vacio')
        else if(inputs.password === '') alert('Campo password vacio')
        else {
            axios.post('http://challenge-react.alkemy.org/',inputs)
            .then((respuesta)=>{
                console.log(respuesta,'RESPUESTA DE LA PETICIÓN A URL DE TOKEN')
            })
        }

    }




    return <form onSubmit = {(e) => onSubmit(e)}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input onChange ={(e) => onChange(e)} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input onChange ={(e) => onChange(e)} name='password' type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button  type="submit" class="btn btn-primary">Enviar</button>
    </form>
}