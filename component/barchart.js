import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [{
//     label: '# of Votes',
//     data: [12, 19, 3, 5, 2, 3],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)'
//     ],
//     borderColor: [
//       'rgba(255, 99, 132, 1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255, 159, 64, 1)'
//     ],
//     borderWidth: 1
//   }]
// }


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

const options = {
  plugins: {
    legends: {
      position: "bottom",
      align: "end",
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle"
      },
      title: {
        text: "Sales Report",
        display: true,
        color: "#000",
        font: {
          size: 18,
        }
      }
    }
  },
  scales: {
    xAxis: {
      display: true,
    },
    yAxis: {
      max: 1,
    },
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
    },
  },
};


export default function BarGraph() {
  return (
    <div className="card">
      <Bar
        data={data}
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
        }}
      />

      <style jsx>{`
        .card {
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

        @media (max-width: 600px) {

        }
      `}</style>
    </div>
  );
};