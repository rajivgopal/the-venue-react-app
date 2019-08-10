import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNFO";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueNfo">
          <VenueNfo />
        </Element>
      </div>
    );
  }
}

export default App;
