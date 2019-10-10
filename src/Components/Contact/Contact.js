import React, { Component } from "react";
import { Consumer } from "../../Context";
import {Link} from 'react-router-dom';
import axios from 'axios';
class Contact extends Component {
  state = {
    showContact: true
  };

  onShowClick = () => {
    this.setState({ showContact: !this.state.showContact });
  };
  onDelete = async (id,dispatch) => {
     await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
     dispatch({type:'DELETE_CONTACT',payload:id});  
  };

  render() {
    const {id,name,email,phone} = this.props.contact;
    const {showContact}=this.state;
    return(
    <Consumer>
      {value => {
        const {dispatch}=value;
        return (
          <div className="card card-body mb-3">
            <h1>
              {name}
              <i
                className="fa fa-sort-down"
                style={{ cursor: "pointer" }}
                onClick={this.onShowClick}
              ></i>
              
              <i
                className="fa fa-times"
                style={{ cursor: "pointer", float: "right", color: "red" }}
                onClick={this.onDelete.bind(this,id,dispatch)}
              ></i>
              <Link to={`contact/edit/${id}`}>
              <i
                className="fa fa-edit"
                style={{ cursor: "pointer", float: "right", color: "black ",marginRight:'1rem' }}
              />
              </Link>
            </h1>
            {showContact ? (
              <ul className="list-group">
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Contact:{phone}</li>
              </ul>
            ) : null}
          </div>
        );
      }}
    </Consumer>
    )
  }
}

export default Contact;
