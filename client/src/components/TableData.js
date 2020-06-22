import React, { Component } from "react";

export class TableData extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.data.gender}</td>
          <td>{this.props.data.degree_t}</td>
          <td>{this.props.data.degree_p}</td>
          <td>{this.props.data.specialisation}</td>
          <td>{this.props.data.mba_p}</td>
          <td>{this.props.data.status}</td>
          <td>{this.props.data.workex}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default TableData;
