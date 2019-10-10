import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from 'axios';
import TextInputGroup from "../layout/TextInputGroup";
 class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error:{}
  };
async componentDidMount(){
  const {id}=this.props.match.params;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const contact= res.data;
  this.setState({
    name:contact.name,
    email:contact.email,
    phone:contact.phone 
  });
}

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone,error} = this.state;
    //Check for errors
    if(name===''){
      this.setState({ error: {name:"name is required"}});
      return;
    }
    if(email===''){
      this.setState({ error: {email:"email is required"}});
      return;
    }
    if(phone===''){
      this.setState({ error: {phone:"Phone No is required"}});
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };
    const{id}=this.props.match.params;
   const res=await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,newContact);
   dispatch({ type: "UPDATE_CONTACT", payload: res.data});
    this.setState({
      name: "",
      email: "",
      phone: "",
      error:{}
    });
    this.props.history.push('/');
  };
  render() {
    const { name, email, phone,error} = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
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
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                  ></TextInputGroup>

                  <input
                    type="submit"
                    value="Edit Contact"
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
export default EditContact;