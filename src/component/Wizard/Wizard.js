import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelEverything } from '../../ducks/reducer';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class Wizard extends Component {
    render(){
        return(
            <div>
                <Link to = '/'><button onClick = {() => this.props.cancelEverything(this.state)}>Cancel</button></Link>
                <Switch>
                    <Route exact path = '/wizard/step1' component = {StepOne}/>
                    <Route path = '/wizard/step2' component = {StepTwo}/>
                    <Route path = '/wizard/step3' component = {StepThree}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchtoProps = {
    cancelEverything
}

export default connect(null, mapDispatchtoProps)(Wizard);