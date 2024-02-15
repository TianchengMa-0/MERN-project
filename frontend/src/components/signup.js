import React,{useState} from 'react'

export default function Signup(){
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
            const response=await fetch('http://localhost:3000/backend/api/signup',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData)
            })
            if (response.ok){
                console.log('data submitted')
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