import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepTwo } from '../../ducks/reducer';

class StepTwo extends Component {
    constructor(){
        super();
        this.state = {
            img: ''
        }
    }

    handleImageInput(val){
        this.setState({img: val})
    }

    componentDidMount(){
        this.setState({img: this.props.img})
    }

    render(){
        return(
            <div>
                <div>
                    <h4>Image URL</h4>
                    <input onChange = {(e) => this.handleImageInput(e.target.value)}
                           value = {this.state.img}/>
                </div>
                <Link to = '/wizard/step1'><button onClick = {() => this.props.updateStepTwo(this.state)}>Previous Step</button></Link>
                <Link to = '/wizard/step3'><button onClick = {() => this.props.updateStepTwo(this.state)}>Next Step</button></Link>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {
        img: state.img
    }
}

const mapDispatchtoProps = {
    updateStepTwo
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepTwo);