import React, { Component } from "react";
import salat from "../salat";
// import salawat from "../salawat";
// import numbers from "../salawat";
// import popUp from "./popUp";
// import { calls } from "../src/fetching.js";

class Cities extends Component {
  displayStores = (x) => {
    var storesHtml = "";

    x.sort(this.compare);
    for (var [index, store] of x.entries()) {
      let adress = store["names"].fr;
      let phone = store["names"].ar;
      let ids = store["id"];
      storesHtml += ` 
      <div class="store-container" id="${ids}">
        <div class="store-container-background" id="${ids}">
        <div class="store-info-container" id="${ids}">
      <div class="store-adress" id="${ids}">
        ${adress}<br>
        ${phone}
      </div>
    </div>
      <div class="store-number-container" id="${ids}">
        <div class="store-number" id="${ids}">${index + 1}</div>
      </div>
    </div>
    </div>
    </div>
      `;
      document.querySelector(".stores-list").innerHTML = storesHtml;
    }
  };
  componentDidMount() {
    window.addEventListener("load", this.displayStores(salat));
  }
  componentWillUnmount() {
    window.addEventListener("load", this.displayStores(salat));
  }
  calls = async (indice) => {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    const salato = `https://us-central1-salat-1234.cloudfunctions.net/salat/prayer?city=${indice}&month=${month}&day=${day}`;
    const times = [];
    const response = await fetch(salato);
    const data = await response.json();
    times.push(...data);
    return times;
  };

  compare = (a, b) => {
    const bandA = a.names["fr"].toUpperCase();
    const bandB = b.names["fr"].toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  };

  findMatches = (wordToMatch, salat) => {
    return salat.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.names["fr"].match(regex) || place.names["ar"].match(regex);
    });
  };

  displayMatches = () => {
    const input = document.querySelector(".zip-code-input");
    const matchArray = this.findMatches(input.value, salat);
    this.displayStores(matchArray.sort());
  };

  render() {
    return (
      <>
        <div className="search-container">
          <div className="search">
            <input
              // onKeyUp={this.displayMatches}
              onKeyUp={this.displayMatches}
              type="text"
              placeholder="Entrer le Nom de votre ville"
              className="zip-code-input"
            />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="stores-list-container">
          <div onClick={this.props.onClick} className="stores-list">
            <div className="store-container">
              <div className="store-info-container">
                <div className="store-adress">
                  أكادير
                  <br />
                  Agadir
                </div>
              </div>
              <div className="store-number-container">
                <div className="store-number">1</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cities;
