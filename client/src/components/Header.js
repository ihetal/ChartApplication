import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      username: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/userprofile")
      .then((res) => {
        this.setState({
          isAuthenticated: true,
          username: res.data.username,
        });
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            isAuthenticated: false,
          });
        }
      });
  }
  logout = () => {
    axios.get("http://localhost:5000/api/logout");
  };
  render() {
    let redirectvar = null;
    if (!this.state.isAuthenticated) {
      redirectvar = <Redirect to="/"></Redirect>;
    }
    return (
      <div>
        {redirectvar}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <h2>
                  <i class="fa fa-home" aria-hidden="true"></i> {"  "}
                  Welcome
                </h2>
              </li>
            </ul>
            <span className="navbar-text" style={{ textAlign: "right" }}>
              {this.state.username !== "" ? (
                <React.Fragment>
                  <p>
                    Hello {this.state.username}!&nbsp;&nbsp;
                    <Link to="/" onClick={this.logout}>
                      Logout
                    </Link>
                  </p>
                </React.Fragment>
              ) : null}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
