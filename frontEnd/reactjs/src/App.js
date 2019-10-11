import React, {Component} from 'react';
import './lib/main.css';
import './lib/Semantic-UI-CSS-master/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Login from './login/Login';
import { connect } from 'react-redux';
import User from './user/containers/User';
import Menu from './menu/containers/Menu';
import Navbar from './navbar/containers/navbar';
import Order from './card/containers/Order';

class App extends Component {

  //class constructor whith given properties
  constructor(props) {
    super(props);
    
    this.state = {
    }; 

    //creation of an initial state, a json object
    this.user = {};
  }

  render(){

    let display = {};
    console.log("Let's render the app!");

    if(this.props.user){
      // Keep user information
      this.user=this.props.user;
    }

    // console.log("This is my user: "+JSON.stringify(this.user));

    if(this.props.hasAccount || this.props.hasAccount === "undefined"){
      console.log(this.props.islogged);  
      if(this.props.isLogged){
        console.log("islogged");
        if(this.props.buyCard){
          // return buy card view
          display = (
            <div>
              <Navbar
                isLogged="true"
                name={this.user.login}
                title="Buy cards"
                money={this.user.account}
              /> 
              <Order orderType="Buy" user={this.user}/>
            </div>
          );
          
        } else if (this.props.sellCard){
          // return sell card view
          display = (
            <div>
              <Navbar
                isLogged="true"
                name={this.user.login}
                title="Sell cards"
                money={this.user.account}
              /> 
              <Order orderType="Sell" user={this.user}/>
            </div>
          );
        } else if (this.props.play){
          // return play view
          // TODO
        } else {
          // return store view
          display = (
            <div>
              <Navbar
                isLogged="true"
                name={this.user.login}
                title="Home"
                money={this.user.account}
              /> 
              <Menu/>
            </div>
          );
        }

      }else{
        // return Login view

        display = (

          <div>  
          
            <Navbar
              isLogged="false"
              name=""
              title="Sign In"
              money=""
            />
            <Login>
            </Login>

          </div>
        );
      }
      

    }else{
      // return Signup view
      display = (
        <User 
        id="5"
        surname="Maxime"
        lastname="Delahodde"
        login="m-delahodee"
        pwd = "max"
        account="2.3"
        img=""
        display_type="USER_FORM"
    />  );
    }

    return display;

  }

}

const mapState = (state, ownProps) => {
  // console.log("mapState in App.js => "+JSON.stringify(state));
  return {
    hasAccount: state.loginReducer.hasaccount,
    isLogged: state.loginReducer.islogged,
    user: state.loginReducer.user,
    buyCard: state.loginReducer.buyCard,
    sellCard: state.loginReducer.sellCard,
    play: state.loginReducer.play
  }
}

export default connect(mapState)(App);
