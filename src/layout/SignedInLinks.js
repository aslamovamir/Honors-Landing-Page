import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link, NavLink } from 'react-router-dom'
import check_icon from './check-icon.png'
import journey_icon from './journey-logo.png'


const SignedInLinks = () => {
    return (
        // ICONS IIF NEEDED
        // <img src={check_icon} alt="Checkin icon" className="icon"/>
        // <img src={journey_icon} alt="Journey logo" className="icon"/>
        <ul className="right">
            <li><a href="https://usfweb.usf.edu/honors/student-checkin">Advising Check-In</a></li>
            <li><a href="https://www.usf.edu/honors/prospective-students/journey.aspx">Honors Journey</a></li>
            <li><a href="https://my.usf.edu/myusf/home_myusf/index">MyUSF</a></li>
            <li><NavLink to='/' className='btn btn-floating green darken-1'>AA</NavLink></li>
        </ul>
        
    )
}

export default SignedInLinks;