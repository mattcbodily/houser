import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepOne extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleNameInput(val){
        this.setState({name: val})
    }

    handleAddressInput(val){
        this.setState({address: val})
    }

    handleCityInput(val){
        this.setState({city: val})
    }

    handleStateInput(val){
        this.setState({state: val})
    }

    handleZipInput(val){
        this.setState({zip: val})
    }

    render(){
        return (
        <div>    
            <div>
                <h3>Property name</h3>
                <input onChange = {(e) => this.handleNameInput(e.target.value)}
                       value = {this.state.name}/>
            </div>
            <div>
                <h3>Address</h3>
                <input onChange = {(e) => this.handleAddressInput(e.target.value)}
                       value = {this.state.address}/>
            </div>
            <div>
                <h3>City</h3>
                <input onChange = {(e) => this.handleCityInput(e.target.value)}
                       value = {this.state.city}/>
                <h3>State</h3>
                <input onChange = {(e) => this.handleStateInput(e.target.value)}
                       value = {this.state.state}/>
                <h3>Zip</h3>
                <input onChange = {(e) => this.handleZipInput(e.target.value)}
                       value = {this.state.zip}/>
            </div>
            <Link to = '/wizard/step2'><button>Next Step</button></Link>
        </div>
        )
    }
}

export default StepOne;