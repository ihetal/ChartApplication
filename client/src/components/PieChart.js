import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
charts(FusionCharts);

ReactFusioncharts.fcRoot(FusionCharts, CandyTheme);

export class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Ice Cream Sandwich",
          value: "1000",
        },
        {
          label: "Jelly Bean",
          value: "5300",
        },
        {
          label: "Kitkat",
          value: "10500",
        },
        {
          label: "Lollipop",
          value: "18900",
        },
        {
          label: "Marshmallow",
          value: "17904",
        },
      ],
    };
  }
  render() {
    const dataSource = {
      chart: {
        caption: "Total Placed by Degree",
        showpercentvalues: "1",
        defaultcenterlabel: "",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
          "<b>$percentValue</b> of our Android users are on <b>$label</b>",
        centerlabel: "Students: $value",
        theme: "candy",
      },
      data: this.props.data,
    };
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="350"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default PieChart;
