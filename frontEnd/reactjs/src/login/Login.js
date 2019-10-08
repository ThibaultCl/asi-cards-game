import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSignupPage} from '../actions';
const axios = require('axios').default;

class Login extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);      
        this.state = {
            login:"",
            pwd:"",
        };
        this.processInput=this.processInput.bind(this);
        this.submitLogin=this.submitLogin.bind(this);
        this.handleSignupPageSelected = this.handleSignupPageSelected.bind(this);
    }

    processInput(event){
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(event.target.value);
        let currentVal=this.state;
        this.setState({
            [name]: value
          });
        console.log(this.state);
    }

    submitLogin(){
        console.log("user to log: "+JSON.stringify(this.state));
        // AJAX INSCRIRE USER
        axios.get('/TOEDIT', {
            login:this.state.login,
            pwd:this.state.pwd,
        })
        .then(function(response){
            console.log(response);
            // REDIRIGER TO STORE VIEW
        })
        .catch(function(error){
            console.log(error);
            // REDIRIGER TO LOGIN - MAYBE
        });
    }

    handleSignupPageSelected(hasAccount){
        return this.props.dispatch(setSignupPage(hasAccount));   
    }
     
    //render function use to update the virtual dom
    render() {

        return (
            <form className="ui form">
                <h4 className="ui dividing header">
                    Login
                </h4>

                <div className="col-md-6"> 
                    <label>
                        <b>
                            Username
                        </b>
                    </label> 
                    <input type="text" placeholder="Enter Username" name="login" onChange={(ev)=>{this.processInput(ev)}} required/> 
        
                    <label>
                        <b>
                            Password
                        </b>
                    </label> 
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(ev)=>{this.processInput(ev)}} required/> 
        
                    <button className="btn btn-lg btn-info" type="submit" onClick={()=>{this.submitLogin()}}>
                        Login
                    </button> 
                </div> 
        
                <div className="col-md-6">
                    <div className="btn btn-lg btn-dark" onClick={()=>{this.handleSignupPageSelected(this.props.hasAccount)}}>
                        Create an account
                    </div>
                </div> 
            </form>
        );
    }
}

export default connect()(Login);