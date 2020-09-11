import React, { Component } from 'react';
import  AppBar  from 'material-ui/AppBar';
import {List,ListItem}  from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class Conform extends Component {
    continue = e =>{
    e.preventDefault();
    // Process form for connecting back end or api integration
    this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
        }
    render() {
        const { values :{firstName , lastName ,email, occupation,city,bio}}= this.props;
        console.log('data in confirm.,,', this.props)
        return (
        <MuiThemeProvider>
              <AppBar title="Enter the User Detaisl"/>
              <List>
                  <ListItem
                  primaryText="First Name"
                  secondaryText={firstName}
                  />
                    <ListItem
                  primaryText="Last Name"
                  secondaryText={lastName }
                  />
                    <ListItem
                  primaryText="Email"
                  secondaryText={ email }
                  />
                  <ListItem
                  primaryText="occupation"
                  secondaryText=  {occupation}
                  />
                    <ListItem
                  primaryText="city"
                  secondaryText={city}
                  />
                    <ListItem
                  primaryText="Bio"
                  secondaryText={bio}
                  />

                      
              </List>
           
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

export default Conform;
