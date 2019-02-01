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
        this.handleDeleteHouse = this.handleDeleteHouse.bind(this)
    }

    componentDidMount(){
        return this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    handleDeleteHouse(id){
        axios.delete(`/api/house/${id}`)
        .then(res => {
             this.setState({houses: res.data})
        })
    }

    render(){
        const houseList = this.state.houses.map(houseObj => {
            return(
                <House key = {houseObj.index}
                       houses = {houseObj}
                       id = {houseObj.id}
                       deleteHouse = {this.handleDeleteHouse}/>
            )
        })
        return(
            <div className = "Dashboard">
                <div className = "Dashboardlink">
                    <h4>Dashboard</h4>
                    <Link to = '/wizard/step1'><button>Add New Property</button></Link>
                </div>
                { houseList }
            </div>
        )
    }
}

export default Dashboard;