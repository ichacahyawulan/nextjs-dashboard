import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const data = {
  labels : [
    "January" ,
    "February" ,
    "March" ,
    "April" ,
    "May" ,
    "June" ,
    "July" ,
    "August"
  ] ,
  datasets : [
    {
      label: "Legend 1",
      borderRadius: 30,
      data: [0.1,0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4],
      backgroundColor: "#198564",
      barThickness: 10,
    },
    {
      label: "Legend 2",
      borderRadius: 20,
      data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
      backgroundColor: "#F9D14B",
      barThickness: 10
    }
  ]
}

export default function BarGraph() {
  return (
    <div className="card">
      <Bar
        data={data}
        // custom options
        options={{
          plugins: {
            legend: {
              display: true,
              position: "top",
              align: "end",
              labels: {
                boxWidth: 7,
                usePointStyle: true,
                pointStyle: "circle"
              },
            },
            title: {
              position: "top",
              align: "start",
              text: "Bar Chart Example",
              display: true,
              color: "#000",
              font: {
                size: 18,
              }
            }
          },
          maintainAspectRatio : false
        }}
      />

      {/* local style for barchart */}
      <style jsx>{`
        .card {
          position: relative;
          width: 900px;
          height: 600px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background: #FFFFFF;
          box-shadow: 0px 10px 13px rgba(157, 159, 167, 0.05);
          border-radius: 5px;
          border: 0px;
        }

        @media only screen and (max-width: 992px) {
          .card {
            width: 100%;
            height: 300px;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};