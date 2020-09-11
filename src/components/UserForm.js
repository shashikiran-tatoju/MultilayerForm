import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails' ;
import FormPersonalDetails from './FormPersonalDetails';
import Conform from './Conform';
import Success from './Success';


export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
    };

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        }); 
    }

       // proceed to Privious step

       prevStep = () => {
        const { step } = this.state;
        this.setState({
          step:step - 1
        }); 
    }


    // handel fields chnage 

    handelChanage = input => e => {
     this.setState({[input]: e.target.value});

    }

    render() {
        const { step } = this.state;
        const { firstName , lastName ,email ,occupation,city,bio } = this.state;
        const values = { firstName , lastName ,email ,occupation,city,bio } 
        switch(step){
            case 1: 
            return(
                <FormUserDetails
                 nextStep={this.nextStep}
                 handelChanage={this.handelChanage}
                 values ={values}
                />
            )
            case 2: 
                 return <FormPersonalDetails
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handelChanage={this.handelChanage}
                 values ={values}
                 />
            case 3:
                 return <Conform
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 values ={values}
                 
                 />
           case 4:
                 return <Success />
                 
        }
    }
}


export default UserForm;
