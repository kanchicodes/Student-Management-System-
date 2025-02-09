import { Link } from "react-router-dom";

export default function StudentTable() {
    return (
        <div className="container">
            <h2>Student Record</h2>
            <div className="table-container">
                <Link to="/Student/Create" class="btn btn-add">Add New Student</Link>
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
                        <tr>
                            <td>1</td>
                            <td>kanchi</td>
                            <td>Mumbai</td>
                            <td>9999999999</td>
                            <td>
                                <a href=" " className="btn btn-info">View</a>
                                <a href=" " className="btn btn-primary">Edit</a>
                                <a href=" " className="btn btn-denger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}