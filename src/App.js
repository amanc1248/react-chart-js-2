import "./App.css";
import React, { Component } from "react";
import Chart from "./components/Chart";
class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // ajax call here
    this.setState({
      chartData: {
        labels: ["Paid", "Delivered", "Cancelled", "Pending"],
        datasets: [
          {
            label: "Population",
            data: [38, 239, 9, 65],
          },
        ],
      },
    });
  }
  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData}></Chart>
      </div>
    );
  }
}

export default App;
