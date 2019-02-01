import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render(){
        return(
            <div>
                <div>
                    <h4>Image URL</h4>
                    <input onChange = {(e) => this.handleImageInput(e.target.value)}/>
                </div>
                <Link to = '/wizard/step1'><button>Previous Step</button></Link>
                <Link to = '/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}

export default StepTwo;