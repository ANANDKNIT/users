import React from "react";
import {Line} from "react-chartjs-2";

const state = {
  labels: [
    "my tooltip 11/19",
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
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.5,
      borderColor: "rgba(0,0,0,1)",
      pointRadius: 0,
      data: [
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
      ],
    },
  ],
};

const Chart = () => {
  return (
    <div>
      <h6>Engagment</h6>
      <Line
        data={state}
        options={{
                responsive: true,
                tooltips: {
                  mode: 'index',
                  intersect: false,
                  callbacks:{title:()=>{return "Tolltip this is custom "}}
                },
               hover: {
                  mode: 'nearest',
                  intersect: true
                },
                scales: {
                  xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Month'
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                    },
                  }]
                },
              
          title: {
            display: true,

            fontSize: 20,
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
