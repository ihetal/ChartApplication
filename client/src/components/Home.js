import React, { Component } from "react";
import Header from "./Header";
import "./Home.css";

export class Home extends Component {
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
              <button class="btn btn-danger">
                <i class="fab fa-google left"></i>
                &nbsp;&nbsp;
                <a
                  class="link"
                  href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20profile&client_id=615146106031-4pobm48t89vcn6sg42nuolg5nkt4udav.apps.googleusercontent.com"
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
