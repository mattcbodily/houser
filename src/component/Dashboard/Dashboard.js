import React, { Component } from 'react';
import House from '../House/House';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <h4>Dashboard</h4>
                <House />
            </div>
        )
    }
}

export default Dashboard;