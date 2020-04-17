import React from "react";
import {Line} from "react-chartjs-2";

const labelData = [
  "11/19",
  "12/19",
  "01/20",
  "02/20",
  "03/20",
  "04/20",
  "05/20",
  "06/20",
  "07/20",
  "08/20",
  "09/20",
  "10/20",
  "11/20",
];
const myDatasets = [
  88,
  150,
  180,
  200,
  230,
  210,
  170,
  205,
  250,
  210,
  270,
  273,
  300,
  350,
  380,
];

const Chart = () => {
  const state = {
    labels: labelData,
    datasets: [
      {
        lineTension: 0.5,
        borderColor: "rgba(0,0,0,1)",
        data: myDatasets,
      },
    ],
  };
  return (
    <div>
      <h6>Engagment</h6>
      <Line
        data={state}
        options={{
          tooltips: {
            intersect: true,
            callbacks: {
              title: (tooltipItem, data) => {
                if (tooltipItem[0].xLabel === "06/20") {
                  return "ttile :" + tooltipItem[0].yLabel;
                } else {

                  return null;
                }
              },
              label: (tooltipItem, data) => {
                if (tooltipItem.xLabel === "06/20") {
                  return "custom tooltip lable:" + tooltipItem.xLabel;
                } else {
                  return null;
                }
              },
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
};

export default Chart;
