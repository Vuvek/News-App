import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          

          <Switch>
            <Route exact path="/"><News key={'general'} pageSize={6} country="in" category="general" /></Route>
            <Route exact path ="/business"> <News key={'business'} pageSize = {6} country = "in" category = "business"/> </Route>
            <Route exact path ="/entertainment" > <News key={'entertainment'} pageSize = {6} country = "in" category = "entertainment"/> </Route>
            <Route exact path ="/general" > <News key={'general'} pageSize = {6} country = "in" category = "general"/> </Route>
            <Route exact path ="/health" >< News key={'health'} pageSize = {6} country = "in" category = "health"/> </Route>
            <Route exact path ="/Science" > <News key={'Science'} pageSize = {6} country = "in" category = "Science"/> </Route>
            <Route exact path ="/Sports" > <News key={'Sports'} pageSize = {6} country = "in" category = "Sports"/> </Route>
            <Route exact path ="/technology" > <News key={'technology'} pageSize = {6} country = "in" category = "technology"/> </Route>
            <Route exact path ="/about" > <About/></Route>
            
          </Switch>
        </Router>
      </>
    );
  }
}
