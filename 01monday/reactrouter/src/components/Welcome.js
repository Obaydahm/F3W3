import React from 'react';
import { Link } from "react-router-dom";
function Welcome(props) {

    return (
        <div className="box">
            <h2>Facebook</h2>
            <p><Link to="./all">See all users</Link></p>
        </div>
    );
}

export default Welcome;