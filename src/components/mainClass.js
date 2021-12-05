import React from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";
import { useState } from "react";

class mainClass extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    user.getRandomUserNames().then((response) => {
      this.setState({ data: response.data.results });
    });
    // spaceX.latest().then((response) => {
    //   console.log("got spaceX", response.data);
    // });
    // cats.getRandomCat().then((response) => {
    //   console.log("got random cat: ", response);
    // });
    countries.getCountries().then((response) => {
      this.setState({ data: response.data.results });
    });
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
    //add a comment
  }

  render() {
    return (
      <div className="searching">
        <div className="content">
          <input type="text" placeholder="Searching..." />
          {this.state.data.map((item, index) => {
            return (
              <div>
                <table className="content">
                  <tr key={index}>
                    <b>Name:</b> {item.name.first}
                  </tr>

                  <tr key={index}>
                    <b>Country: </b> {item.location.country}
                  </tr>

                  <tr key={index}>
                    <b>City:</b> {item.location.city}
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default mainClass;
