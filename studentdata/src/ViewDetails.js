import { Link, useParams } from "react-router-dom";

export default function ViewDetails() {
// console.log(useParams);
const {studentid} = useParams();
// console.log(studentid);
    return(
        <div className="container">
            <h1>Student Details</h1>
            <div className="details">
            <p><strong>Id:</strong>1</p>
            <p><strong>Name:</strong>Pratik</p>
            <p><strong>Place:</strong>Loni</p>
            <p><strong>Phone:</strong>7575757575</p>
        </div>
        <Link to="/" class="btn btn-back">Back</Link>
        </div>
    )
}