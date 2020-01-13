import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class ServiceUsage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {},
          series: [44, 55, 41, 17, 15],
          labels: ["A", "B", "C", "D", "E"]
        };
      }
    render() {
        return (
            <div >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="380"
            />
          </div>
        )
    }
}
