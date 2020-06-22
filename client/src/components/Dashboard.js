import React, { Component } from "react";
import PieChart from "./PieChart";
import "./Dashboard.css";
import axios from "axios";
import TableData from "./TableData";
import Filters from "./Filters";
import Header from "./Header";
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_salary: 0,
      total_placed: 0,
      by_degree: "",
      tabledata: [],
      page: 1,
      limit: 10,
      totalpages: 0,
    };
  }

  componentDidMount() {
    axios.get("/api/chartdata").then((res) => {
      this.setState({
        avg_salary: res.data.avg_salary.Avg_Salary,
        total_placed: res.data.total_placed.Total_Placed,
        by_degree: res.data.by_degree,
        tabledata: res.data.tabledata,
      });
    });
  }

  prevPage = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
      });
    }
  };
  nextPage = () => {
    if (
      this.state.page <
      Math.ceil(this.state.tabledata.length / this.state.limit)
    ) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  filterSelected = (filterdata) => {
    axios.post("/api/datafiltered", filterdata).then((res) => {
      this.setState({
        avg_salary: res.data.avg_salary.Avg_Salary,
        total_placed: res.data.total_placed.Total_Placed,
        by_degree: res.data.by_degree,
        tabledata: res.data.tabledata,
      });
    });
  };

  render() {
    let totalpages = null;
    if (this.state.tabledata.length !== 0) {
      totalpages = Math.ceil(this.state.tabledata.length / this.state.limit);
    }
    return (
      // <div style={{ background: "#4a4a4a" }}>
      <React.Fragment>
        <Header />
        <div style={{ display: "flex" }}>
          <div class="filter__header">
            <h4> FILTERS</h4>
            <Filters filterSelected={this.filterSelected} />
          </div>
          <div>
            <section class="content">
              <div class="container" style={{ display: "flex" }}>
                <div class="col-lg-4 col-md-4 card-section">
                  <div class="card">
                    <h2>Average Salary</h2>
                    <h2>{this.state.avg_salary}</h2>
                  </div>
                  <div class="card">
                    <h1>Total Placed</h1>
                    <h2>{this.state.total_placed}</h2>
                  </div>
                </div>
                <div
                  class="col-lg-8 col-md-8"
                  style={{ width: "800px", height: "200px" }}
                >
                  <PieChart data={this.state.by_degree} />
                </div>
              </div>
            </section>
            <br />
            <br />
            <div class="container">
              <div class="pagination">
                <p>
                  Showing Page {this.state.page} of {totalpages}
                </p>
                <h4 onClick={this.prevPage}>&laquo;</h4>
                <h4 onClick={this.nextPage}>&raquo;</h4>
              </div>
              <table class="table table-dark custom-table table-sm">
                <thead>
                  <tr>
                    <th scope="col" class="th-sm">
                      Gender
                    </th>
                    <th scope="col">Degree</th>
                    <th scope="col">Degree Percentage</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">MBA Percentage</th>
                    <th scope="col">Status</th>
                    <th scope="col">Work Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tabledata.length !== 0 ? (
                    <React.Fragment>
                      {this.state.tabledata
                        .filter(
                          (tabledata, idx) =>
                            idx >= (this.state.page - 1) * 10 &&
                            idx < this.state.page * 10
                        )
                        .map((data) => {
                          return <TableData data={data} />;
                        })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
