import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <div className="container  ">
        <div className="mb-5">
          <center>
            <h1
              style={{
                fontFamily: "cursive",
                display: "inline-block",
              }}
            >
              COVID TRACKER
            </h1>
          </center>
        </div>
      </div>
    );
  }
}
