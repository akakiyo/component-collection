import Chart from "react-apexcharts";
import { useState } from "react";

const LineChart = () => {
  const [options, setOptions] = useState({
    chart: {
      foreColor: "black", //テキストの色
      background: "white", //chartの背景色
      zoom: {
        //ズーム機能
        enabled: true,
        type: "x",
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
      events: {
        //イベントトリガー設定
        click: (event, chartContext, config) => {
          const categories = config.globals.categoryLabels;
          const datas = config.config.series[0].data;
          const dataPoint = config.dataPointIndex;
          alert(`x座標：${categories[dataPoint]}\ny座標：${datas[dataPoint]}`);
        },
        selection: (chartContext, { xaxis, yaxis }) => {
          console.log(xaxis);
        },
      },
      selection: {
        enabled: true,
      },
      toolbar: {
        //ツールバーの設定
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true, //selectionを利用する時はenabledをtrueにする必要がある
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: [],
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          },
        },
        autoSelected: "zoom",
      },
      animations: {
        //グラフを描画するときのスピードを設定することができる
        enabled: true,
        easing: "easeinout",
        speed: 500,
        animateGradually: {
          enabled: false, //falseにすることで1回で全てのグラフが描画される
          delay: 150,
        },
        dynamicAnimation: {
          //データが変更され、チャートが再レンダリングする時にアニメーションを発生させるかどうか
          enabled: true,
          speed: 800,
        },
      },
    },
    dataLabels: {
      enabled: true, //データラベルの表示・非表示ができる
      style: {
        colors: ["red"],
      },
      dropShadow: {
        // データラベルに影をつけることができる
        enabled: true,
        left: 2,
        top: 2,
        opacity: 0.5,
      },
    },
    xaxis: {
      tickAmount: 3,
      // decimalsInFloat:   少数部の数を設定
    },
    yaxis: {
      //y軸の値を修正することができる
      // decimalsInFloat:   少数部の数を設定
      labels: {
        show: true,
        formatter: (value) => {
          console.log(value);
          return value;
        },
      },
    },
    colors: ["#546E7A", "#E91E63"], //グラフの色を決めることができる
    legend: {
      show: true,
      fontSize: "15px",
      position: "right",
      floating: false,
      //   horizontalAlign: "right",
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [20, 45, 45, 20, 49, 90, 30, 41],
    },
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="500" />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
