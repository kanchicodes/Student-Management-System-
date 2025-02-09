import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateStudent() {
    const[id , setId]=useState("");
    const[name , setName]=useState("");
    const[place , setPlace]=useState("");
    const[phone , setPhone]=useState("");
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(id , name , place , phone);}
        fetch("http://localhost:8000/students")
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
    
    return (
     <div className="container">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id:</label>
            <input type="text" id="id" name="id" value={id}  onChange={e => setId(e.target.value)}/>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  value={name} onChange={e => setName(e.target.value)}/>
            
            <label htmlFor="place">Place:</label>
            <input type="text" id="place" name="place" value={place} onChange={e => setPlace(e.target.value)} />

            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone"  value={phone} onChange={e => setPhone(e.target.value)}/>

            <div>
            <button className="btn btn-save">Save</button>
            <Link to= "/" className="btn btn-back">Back</Link>

            </div>
        </form>
     </div>
    )
}