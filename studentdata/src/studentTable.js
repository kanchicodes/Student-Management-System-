import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function StudentTable() {
    // console.log(useState(1));
    const [students , setStudents ]=useState("");
 

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

                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.place}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <a href=" " className="btn btn-info">View</a>
                                    <a href=" " className="btn btn-primary">Edit</a>
                                    <a href=" " className="btn btn-denger">Delete</a>
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