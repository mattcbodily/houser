import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepThree extends Component {
    constructor(){
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleMortgageInput(val){
        this.setState({mortgage: val})
    }

    handleRentInput(val){
        this.setState({rent: val})
    }

    // handleCreateHouse(){
    //     const newHouse = {
    //         name: this.state.name,
    //         address: this.state.address,
    //         city: this.state.city,
    //         state: this.state.state,
    //         zip: this.state.zip
    //     }
    //     axios.post('/api/house', newHouse)
    //     .then(res => {})
    // }

    render(){
        return(
            <div>
                <div>
                    <h4>Monthly Mortgage Amount</h4>
                    <input onChange = {(e) => this.handleMortgageInput(e.target.value)}
                           value = {this.state.mortgage}/>
                </div>
                <div>
                    <h4>Desired Monthly Rent</h4>
                    <input onChange = {(e) => this.handleRentInput(e.target.value)}
                           value = {this.state.rent}/>
                </div>
                <Link to = '/wizard/step2'><button>Previous Step</button></Link>
                <Link to = '/'><button>Complete</button></Link>
            </div>
        )
    }
}

export default StepThree;