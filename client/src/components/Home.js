import React, { Component } from "react";
import Header from "./Header";
import "./Home.css";
import axios from "axios";
export class Home extends Component {
  onClick = () => {
    axios.get("/auth/google");
  };
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="home">
          <div className="login">
            <h2>
              <i class="fas fa-chart-line"></i> Chart Application
            </h2>
            <div class="section">
              <p>Please login in to view</p>
            </div>
            <div class="container">
              <button class="btn btn-danger" onClick={this.onClick}>
                <i class="fab fa-google left"></i>
                &nbsp;&nbsp;
                <a
                  class="link"
                  href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=https%3A%2F%2Fchartapplication.herokuapp.com%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=615146106031-4pobm48t89vcn6sg42nuolg5nkt4udav.apps.googleusercontent.com"
                >
                  Log In With Google
                </a>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
