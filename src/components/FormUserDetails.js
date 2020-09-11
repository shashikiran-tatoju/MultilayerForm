import React, { Component } from 'react';
import  AppBar  from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class FormUserDetails extends Component {
    continue = e =>{
    e.preventDefault();

    
    this.props.nextStep();
    }
    render() {
        const { values , handelChanage}= this.props;
        console.log('props values.,', this.props)
        return (
        <MuiThemeProvider>
              <AppBar title="Enter the User Details"/>
              <TextField 
               hintText=" Enter Your  Email "
               floatingLabelText="First Name"
               onChange={handelChanage('firstName')}
               defaultValue={values.firstName}
              />
              <br/>
              <TextField 
               hintText=" Enter Your  Last Name "
               floatingLabelText="LastName"
               onChange={handelChanage('lastName')}
               defaultValue={values.lastName}
              />
                <br/>
              <TextField 
               hintText=" Enter Your  Email "
               floatingLabelText="Email"
               onChange={handelChanage('email')}
               defaultValue={values.email}
              />
              <br/>
              <RaisedButton
              label="continue"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}
              />
                  
              
        </MuiThemeProvider>

        )
    }
    
}

export default FormUserDetails
