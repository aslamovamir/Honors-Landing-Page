import React, { Component } from "react";
import Announcements from "./Announcements";
import Student from "./Student";

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <h2>Welcome!</h2>
                <Student />
            </div>
        )
    }
}

export default Dashboard;