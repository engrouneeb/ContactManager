import React, { Component } from "react";

class Test extends Component {
    state={
      title:'',
      body:''
    }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => this.setState({
      userId:data.userId,
      title:data.title
    }));
  }
  // componentWillMount(){
  //   console.log("Hello ComponentWillMount......");
  // }
  // componentDidUpdate(){
  //   console.log("ComponentDidUpdate");
  // }
  // componentWillUpdate(){
  //   console.log("ComponentWillUpdate");
  // }
  render() {
    const {userId,title}=this.state;
    return (
      <div>
        <h1 className="display-4">{userId}</h1>
        <p className="lead">{title}</p>
      </div>
    );
  }
}
export default Test;
