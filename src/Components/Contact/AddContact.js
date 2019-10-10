import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from 'axios';
import TextInputGroup from "../layout/TextInputGroup";
 class AddContact extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    error:{}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, contact,error} = this.state;
    //Check for errors
    if(name===''){
      this.setState({ error: {name:"name is required"}});
      return;
    }
    if(email===''){
      this.setState({ error: {email:"email is required"}});
      return;
    }
    if(contact===''){
      this.setState({ error: {contact:"Phone No is required"}});
      return;
    }
     
    this.setState({
      name: "",
      email: "",
      contact: "",
      error:{}
    });
    this.props.history.push('/');
  };
  render() {
    const { name, email, contact,error} = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                  ></TextInputGroup>
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onChange}
                    error={error.email}
                  >
                  </TextInputGroup>
                  <TextInputGroup
                    label="Contact"
                    name="contact"
                    placeholder="Enter Phone..."
                    value={contact}
                    onChange={this.onChange}
                    error={error.contact}
                  ></TextInputGroup>

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;