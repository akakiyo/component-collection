import Chart from "react-apexcharts";
import { useState } from "react";

const RadarChart = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart type="line" width="500" />
        </div>
      </div>
    </div>
  );
};
export default RadarChart;
