import React from "react";
import FormInput from "./formInput";
import CustomBtn from "./custom-button";
import {signInWithGoogle} from "../firebase/utils";

class Sign extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
      const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  };  

  render() {
    return (
      <div className="sign-in">
        <h2>If you have an account</h2>
        <span> Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>          
          <FormInput
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />              
          <FormInput
            name="password"
            value={this.state.password}
            required
            type="password"
            handleChange={this.handleChange}
            label="password"
          />

          <CustomBtn type="submit">Submit</CustomBtn>
          <CustomBtn onClick={signInWithGoogle}>Sign with google</CustomBtn>
        </form>
      </div>
    );
  }
}

export default Sign;
