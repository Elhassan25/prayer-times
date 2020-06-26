import React, { Component } from "react";

class Clock extends Component {
  state = {
    setDate() {
      const date = new Date();
      const seconds = date.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      const secondHand = document.querySelector(".sec-hand");
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      const mins = date.getMinutes();
      const minsDegrees = (mins / 60) * 360 + 90;
      const minHand = document.querySelector(".min-hand");
      minHand.style.transform = `rotate(${minsDegrees}deg)`;
      const hours = date.getHours();
      const hoursDegrees = (hours / 12) * 360 + 90;
      const hourHand = document.querySelector(".hour-hand");
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      var time =
        (hours <= 9 ? "0" : "") +
        hours +
        ":" +
        (mins <= 9 ? "0" : "") +
        mins +
        ":" +
        (seconds <= 9 ? "0" : "") +
        seconds;
      document.querySelector(".currentTime").innerHTML = time;
    },
  };

  setTime = () => {
    setInterval(this.state.setDate, 1000);
  };
  componentDidMount() {
    window.addEventListener("load", this.setTime);
  }
  componentWillUnmount() {
    window.addEventListener("load", this.setTime);
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock-face">
            <div className="hand sec-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand hour-hand"></div>
            <div className="origin"></div>
          </div>
        </div>

        <div className="temps">
          <div className="currentTime"></div>
        </div>
      </>
    );
  }
}

export default Clock;
