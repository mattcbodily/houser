import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { cancelEverything } from '../../ducks/reducer';
import { updateStepThree } from '../../ducks/reducer';

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

    componentDidMount(){
        this.setState({mortgage: this.props.mortgage})
        this.setState({rent: this.props.rent})
    }

    handleCreateHouse(){
        const newHouse = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            img: this.props.img,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post('/api/house', newHouse)
        this.props.cancelEverything(this.state)
    }

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
                <Link to = '/wizard/step2'><button onClick = {() => this.props.updateStepThree(this.state)}>Previous Step</button></Link>
                <Link to = '/'><button onClick = {() => this.handleCreateHouse()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

const mapDispatchtoProps = {
    updateStepThree,
    cancelEverything
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepThree);