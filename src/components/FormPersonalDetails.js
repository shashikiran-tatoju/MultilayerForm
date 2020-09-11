import React, { Component } from 'react';
import  AppBar  from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class FormPersonalDetails extends Component {
    continue = e =>{
    e.preventDefault();
    this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
        }
    render() {
        const { values , handelChanage}= this.props;
        return (
        <MuiThemeProvider>
              <AppBar title="Enter the Personal Detaisl"/>
              <TextField 
               hintText=" Enter Your occupation "
               floatingLabelText="Occupation"
               onChange={handelChanage('occupation')}
               defaultValue={values.occupation}
              />
              <br/>
              <TextField 
               hintText=" Enter Your  city "
               floatingLabelText="City"
               onChange={handelChanage('city')}
               defaultValue={values.city}
              />
                <br/>
              <TextField 
               hintText=" Enter Your  bio "
               floatingLabelText="Bio"
               onChange={handelChanage('bio')}
               defaultValue={values.bio}
              />
              <br/>
              <RaisedButton
              label="continue"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}
             />
               <RaisedButton
              label="Back"
              primary={true}
              style={StyleSheet.button}
              onClick={this.back}
             />
                  
            
              
        </MuiThemeProvider>

        )
    }
}

export default FormPersonalDetails;
