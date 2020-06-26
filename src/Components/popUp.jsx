import React, { Component } from "react";
import salat from "../salat";
import salawat from "../salawat";
import numbers from "../salawat";
import cities from "./cities";

class PopUp extends Component {
  addClass = () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.add("show");
  };
  calls = (indice) => {
    this.addClass();
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    const salato = `https://us-central1-salat-1234.cloudfunctions.net/salat/prayer?city=${indice}&month=${month}&day=${day}`;
    const times = [];
    fetch(salato)
      .then((blob) => blob.json())
      .then((data) => times.push(...data));
    // console.log(this);
    return times;
  };

  handleClick = async (e) => {
    let indice = e.target.id;
    console.log(indice);
    let prayerTimes = await this.calls(indice);
    let objectId = salat.filter((obj) => {
      if (obj.id == indice) return obj;
    });

    let prayers = ``;
    let cityName = objectId[0]["names"]["ar"];
    let city = `أوقات الصلاة بمدينة ${cityName}`;
    document.getElementById("arab").innerHTML = city;
    setTimeout(function () {
      let firstObj = prayerTimes[0];
      const hi = new Date();

      let table = [];
      let gold = 25;
      console.log(salawat[0].number);
      for (let [index, store] of salawat[0].number.entries()) {
        let salatNameFr = salawat[0][index + 1]["fr"];
        let salatNameAr = salawat[0][index + 1]["ar"];
        // console.log(salatNameAr)
        prayers += `
       <tr class = "each" id="${salatNameFr}">
       <td class="enFrancais">${salatNameFr.toUpperCase()}</td>
       <td class="time">${prayerTimes[0][salatNameFr]}</td>
       <td class= "enArabe">${salatNameAr}</td>
       </tr>
      `;
        document.querySelector(".asalat").innerHTML = prayers;
      }

      setTimeout(function diff(start, end) {
        let index = 0;
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
          if (index > 6) {
            return;
          }

          table.push([sal, hours, remainingTime]);

          gold = Math.min(gold, table[index - 1][1]);
          // console.table(gold);

          if (index == 6) {
            let remain = table.filter(function (arr) {
              if (arr[1] == gold) {
                // console.log(arr)
                return arr[0][0];
              }
            });
            // console.table(remain[0][0])
            // console.table(table)
            let sty = document.getElementById(remain[0][0]);
            sty.style.backgroundColor = "grey";
            sty.style.border = "0";
            sty.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
            sty.style.borderRadius = "8px";
          }
        }
      });
    }, 1000);
    return prayers;
  };
  render() {
    return (
      <div className="modal-container" id="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h1 id="arab">أوقات الصلاة بمدينة</h1>
            <button className="close-button" id="close-button">
              &times;
            </button>
          </div>
          <div>
            <table>
              <tbody className="asalat"></tbody>
            </table>
          </div>
          <button id="close">Close</button>
        </div>
      </div>
    );
  }
}

export default PopUp;
