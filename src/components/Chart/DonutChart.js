import Chart from "react-apexcharts";
import { useState } from "react";

const DonutChart = () => {
  const [options, setOptions] = useState({
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "アンケート対象者数",
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return total + "人";
              },
            },
          },
        },
      },
    },
    labels: ["はい", "いいえ", "そうでもない"],
  });
  const [series, setSeries] = useState([100, 79, 21]);

  return (
    <div className="row">
      <div className="mixed-chart">
        <Chart options={options} series={series} type="donut" width="500" />
      </div>
    </div>
  );
};

export default DonutChart;
