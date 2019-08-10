import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    isDrawerOpen: false,
    showHeader: false
  };

  handleSideDrawer = value => {
    this.setState({
      isDrawerOpen: value
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        showHeader: true
      });
    } else {
      this.setState({
        showHeader: false
      });
    }
  };

  render() {
    return (
      <div>
        <AppBar
          poition="fixed"
          style={{
            backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="header_logo_venue font_righteous">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
            </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.handleSideDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              open={this.state.isDrawerOpen}
              onClose={value => this.handleSideDrawer(value)}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
