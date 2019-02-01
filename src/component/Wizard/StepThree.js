import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                <Link to = '/wizard/step2'><button onClick = {() => this.props.updateStepThree(this.state)}>Previous Step</button></Link>
                <Link to = '/'><button>Complete</button></Link>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {
        mortgage: state.mortgage,
        rent: state.rent
    }
}

const mapDispatchtoProps = {
    updateStepThree
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepThree);