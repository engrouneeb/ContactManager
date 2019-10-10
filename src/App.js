import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/Contact/Contacts";
import Header from "./Components/layout/Header";
import AddContact from "./Components/Contact/AddContact";
import EditContact from "./Components/Contact/EditContact";
import About from "./Components/Pages/About";
import NotFound from './Components/Pages/NotFound';
import Test from './Components/Test/test';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "./Context";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header name="Contact Manager" />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NotFound}></Route>
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
