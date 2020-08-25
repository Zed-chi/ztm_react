import React from "react";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import Sign from "./pages/sign";
import { Switch, Route } from "react-router-dom";
import {auth} from "firebase/firebase.utils";

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      curUser:null
    }
    this.unsubscribeFromAuth = null;
  }

  compponentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        curUser:user
      })
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
      <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Sign} />
        </Switch>
      </>
    );
  }

}
