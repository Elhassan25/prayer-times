import React, { Component } from "react";
import "./App.css";
import salat from "../src/salat";
import Cities from "./Components/cities";
import Salat from "./Components/salat";
import Clock from "./Components/clock";
import salawat from "./salawat";

class App extends Component {
  addClass = () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.add("show");
  };
  calls = async (indice) => {
    this.addClass();
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    const salato = `https://us-central1-salat-1234.cloudfunctions.net/salat/prayer?city=${indice}&month=${month}&day=${day}`;
    const times = [];
    await fetch(salato)
      .then((blob) => blob.json())
      .then((data) => times.push(...data));
    return times;
  };

  handleClick = async (e) => {
    let indice = e.target.id;
    // console.log(indice);
    let prayerTimes = await this.calls(indice);
    let objectId = salat.filter((obj) => {
      if (obj.id == indice) return obj;
      else {
        return;
      }
    });
    if (objectId.length == 0) return;
    let prayers = ``;
    let cityName = objectId[0]["names"]["ar"];
    let city = `أوقات الصلاة بمدينة ${cityName}`;
    document.getElementById("arab").innerHTML = city;
    this.setState({ prayer: prayerTimes });
    this.setState({ pray: prayers });
    this.modal();
    this.diff();

    return prayers;
  };

  modal = async () => {
    let firstObj = await this.state.prayer[0];
    const hi = new Date();

    let prayers = ``;
    for (let [index, store] of salawat[0].number.entries()) {
      let salatNameFr = salawat[0][index + 1]["fr"];
      let salatNameAr = salawat[0][index + 1]["ar"];
      prayers += `
     <tr class = "each" id="${salatNameFr}">
     <td class="enFrancais">${salatNameFr.toUpperCase()}</td>
     <td class="time">${this.state.prayer[0][salatNameFr]}</td>
     <td class= "enArabe">${salatNameAr}</td>
     </tr>
    `;
      document.querySelector(".asalat").innerHTML = prayers;
    }
  };

  diff = async () => {
    let index = 0;
    const hi = new Date();
    let table = [];
    let gold = 25;
    let firstObj = await this.state.prayer[0];
    for (const [sal, timing] of Object.entries(firstObj)) {
      index = index + 1;
      let ho = hi.getUTCHours();
      let mi = hi.getUTCMinutes();
      let start = [];
      start.push(ho);
      start.push(mi);
      let end = timing;

      end = end.split(":");
      let startDate = new Date(0, 0, 0, start[0], start[1], 0);
      let endDate = new Date(0, 0, 0, end[0], end[1], 0);
      let diff = endDate.getTime() - startDate.getTime();
      let hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      let minutes = Math.floor(diff / 1000 / 60);
      if (hours < 0) {
        hours = 24 + hours;
      }
      let remainingTime =
        (hours <= 9 ? "0" : "") +
        hours +
        ":" +
        (minutes <= 9 ? "0" : "") +
        minutes;
      if (index > 6) return;
      table.push([sal, hours, remainingTime]);
      gold = Math.min(gold, table[index - 1][1]);
      if (index == 6) {
        let remain = table.filter(function (arr) {
          if (arr[1] == gold) return arr[0][0];
        });
        let sty = document.getElementById(remain[0][0]);
        sty.style.backgroundColor = "#73ff50";
        sty.style.border = "0";
        sty.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        sty.style.borderRadius = "8px";
      }
    }
  };
  render() {
    return (
      <>
        <Cities onClick={this.handleClick} />
        <Clock />
        <Salat />
      </>
    );
  }
}

export default App;
