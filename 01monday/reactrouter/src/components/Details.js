import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Details(props) {
    const { index } = useParams();
    const person = props.data.users[index];
    console.log(person);
    return (
        <div className="box">
            <Link to="../all">Go back</Link>
            <div className="details">
                <table>
                    <tbody>
                        {
                            Object.keys(person).map(key => {
                                if (key === "picture") return null;
                                return (
                                    <tr key={key}>
                                        <td>{key}: </td>
                                        <td>{person[key]}</td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
                <div>
                    <img src={person.picture.large} alt="large" />
                </div>
            </div>
        </div>
    )
}

export default Details;