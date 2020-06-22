import React, { Component } from "react";
import axios from "axios";
export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      degree: "",
      specialization: "",
      workex: "",
      degree_filter: [],
      specialization_filter: [],
    };
  }
  componentDidMount() {
    axios.get("/api/filters").then((res) =>
      this.setState({
        degree_filter: res.data.degree,
        specialization_filter: res.data.specialization,
      })
    );
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    setTimeout(() => this.props.filterSelected(this.state), 500);
  };
  reset = () => {
    window.location.reload(true);
  };
  render() {
    return (
      <React.Fragment>
        <select
          class="custom-select filters"
          name="gender"
          value={this.state.gender}
          onChange={this.onChange}
        >
          <option selected>Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <select
          class="custom-select filters"
          name="degree"
          value={this.state.degree}
          onChange={this.onChange}
        >
          <option selected>Degree</option>
          {this.state.degree_filter.length !== 0 ? (
            <React.Fragment>
              {this.state.degree_filter.map((degree) => {
                return (
                  <option key={degree.degree_t} value={degree.degree_t}>
                    {degree.degree_t}
                  </option>
                );
              })}
            </React.Fragment>
          ) : null}
        </select>

        <select
          class="custom-select filters"
          name="specialization"
          value={this.state.specialization}
          onChange={this.onChange}
        >
          <option selected>Specialization</option>
          {this.state.specialization_filter.length !== 0 ? (
            <React.Fragment>
              {this.state.specialization_filter.map((filter) => {
                return (
                  <option
                    key={filter.specialisation}
                    value={filter.specialisation}
                  >
                    {filter.specialisation}
                  </option>
                );
              })}
            </React.Fragment>
          ) : null}
        </select>

        <select
          class="custom-select filters"
          name="workex"
          value={this.state.workex}
          onChange={this.onChange}
        >
          <option selected>Work Experience</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button
          class="btn btn-primary"
          style={{ maxWidth: "150px" }}
          onClick={this.reset}
        >
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default Filters;
