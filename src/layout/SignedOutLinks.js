import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link, NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign In</NavLink></li>
            <li><NavLink to='/'>Judy Genshaft Honors College at USF</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;