import Chart from "react-apexcharts";
import { useState } from "react";

const DonutChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [labels, setLabels] = useState(["A", "B", "C", "D", "E"]);

  return (
    <div className="row">
      <div className="mixed-chart">
        <Chart options={options} series={series} type="donut" width="500" />
      </div>
    </div>
  );
};

export default DonutChart;
