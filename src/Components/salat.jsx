import React, { Component } from "react";

class Salat extends Component {
  removeClass = () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove("show");
  };
  render() {
    return (
      <React.Fragment>
        <div className="modal-container" id="modal-container">
          <div className="modal">
            <div className="modal-header">
              <h1 id="arab">أوقات الصلاة بمدينة</h1>
              <button
                onClick={this.removeClass}
                className="close-button"
                id="close-button"
              >
                &times;
              </button>
            </div>
            <div>
              <table>
                <tbody className="asalat"></tbody>
              </table>
            </div>
            <button onClick={this.removeClass} id="close">
              Close
            </button>
          </div>
        </div>

        <footer>
          <div className="ayyah">
            إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Salat;
