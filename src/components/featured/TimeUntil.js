import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class TimeUntil extends Component {
  state = {
    deadLine: "Nov, 30, 2019",
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  };

  getTimeUntil = () => {
    const time = Date.parse(this.state.deadLine) - Date.parse(new Date());
    if (time < 0) {
    } else {
      const secs = Math.floor((time / 1000) % 60);
      const mins = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 60);
      const days = Math.floor(((time / (1000 * 60 * 60)) * 24) % 60);

      this.setState({
        secs,
        mins,
        hours,
        days
      });
    }
  };
  componentDidMount() {
    setInterval(() => this.getTimeUntil(), 1000);
  }
  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.mins}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.secs}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
