import { useEffect, useState } from "react";
import { data, Link , useNavigate } from "react-router-dom";

export default function StudentTable() {
    // console.log(useState(1));
    const [students , setStudents ]=useState("");
    const navigate = useNavigate();
    const DisplayDetails = (id) => {
        navigate("/Student/View/"+id);
    }
    const EdityDetails = (id) => {
        navigate("/Student/Edit/"+id);
    }

    const RemoveDetails = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
      
                fetch("http://localhost:8000/students/"+id,{
                    method: "DELETE",
                   
                })
                .then((res) => {
                    alert("Remove Student data successfully");
                 window.location.reload();
                })
                .catch((err) => console.log(err.message)
            )
        }
            }
        
    

    useEffect(() => {
        fetch("http://localhost:8000/students")
            .then((res) => res.json())
            .then((data) =>
               setStudents(data)).catch((err) =>
                    console.log(err.message))
    }, []);
    return (
        <div className="container">
            <h2>Student Record</h2>
            <div className="table-container">
                <Link to="/Student/Create" className="btn btn-add">Add New Student</Link>
                <table>
                    <thead>

                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          students &&  students.map ((item)=>(

                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.place}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button onClick={()=>DisplayDetails(item.id)} className="btn btn-info">View</button>
                                    <button onClick={()=>EdityDetails(item.id)} className="btn btn-primary">Edit</button>
                                    <button onClick={()=>RemoveDetails(item.id)} className="btn btn-denger">Delete</button>
                                </td>
                            </tr>
                            )
                            )
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}