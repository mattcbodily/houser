import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    render(){
        const houseList = this.state.houses.map(houseObj => {
            return(
                <House id = {houseObj.id}
                       houses = {houseObj}/>
            )
        })
        return(
            <div>
                <h4>Dashboard</h4>
                <Link to = '/wizard'><button>Add New Property</button></Link>
                { houseList }
            </div>
        )
    }
}

export default Dashboard;