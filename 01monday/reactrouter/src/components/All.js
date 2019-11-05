import React from 'react';
import { Link } from "react-router-dom";

function All(props) {
    const persons = props.data.users;
    return (
        <div className="box">
            <Link to="/">Go back</Link>

            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((p, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={p.picture.thumbnail} alt="thumbnail" />
                                </td>
                                <td>{p.first + " " + p.last}</td>
                                <td><Link to={"./details/" + i}>Details</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default All;