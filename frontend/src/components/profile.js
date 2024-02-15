import React,{useState} from 'react'


export default function Profile(){
    const [profile,setProfile]=useState({
        email:'',
        name:'',
    })
    const [editMode,setEditMode]=useState(false)

    function handleEdit(){
        setEditMode(true)
    }

    async function handleSave(e){
        setEditMode(false)
        console.log(profile)
        // backend
        try {
            const data=await fetch('http://localhost:3000/backend/api/saveProfile',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(profile)
            })
            if (data.ok){
                console.log("profile saved")
            }
            else{
                console.log("error happens when save profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleInput(e){
        const {name,value}=e.target;
        setProfile(prevData=>({
            ...prevData,
            [name]:value,
        }))
    }
    return(
        <>
        {editMode ? (
            <div>
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInput}
                ></input>
                <input
                    type="text"
                    name="email"
                    value={profile.email}
                    onChange={handleInput}
                ></input>
                <button onClick={handleSave}>Save</button>
            </div>
        ):(
            <div>
                <div>Basic Info</div>
                <br></br>
                <span>{profile.name}</span>
                <br></br>
                <span>{profile.email}</span>
                <button onClick={handleEdit}>Edit</button>
            </div>
            
        )}
            
        </>
    )
}