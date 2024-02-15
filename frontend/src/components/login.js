import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const history = useNavigate();
    // data
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    })
    // change state by input
    function handleInput(e){
        const { name, value } = e.target;
        setFormData(prevData => ({
        ...prevData,
        [name]: value,
        }));
    }
    // submit form
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response=await fetch('http://localhost:3000/backend/api/login',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData)
            })
            if (response.ok){
                history('/');
            }
            else{
                console.log('submit fails')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            Email address
            <br></br>
            <input type="text" name="email" value={formData.email} onChange={handleInput}></input>
            <br></br>
            Password
            <br></br>
            <input type="password" name="password" value={formData.password} onChange={handleInput}></input>
            <br></br>
            <input type="submit"></input>
        </form>
    )
}