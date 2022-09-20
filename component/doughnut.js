import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const data = {
	labels: [
		'Legend 1',
		'Legend 2',
		'Legend 3',
    'Legend 4'
	],
	datasets: [{
		data: [25, 10, 25, 40],
		backgroundColor: [
		'#202330',
		'#F9D14B',
		'#FD7D36',
    '#24C2B9'
		],
		hoverBackgroundColor: [
		'#202330',
		'#F9D14B',
		'#FD7D36',
    '#24C2B9'
		]
	}]
};

export default function Doughnat() {
  return (
    <div className="card">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              align: "center",
              labels: {
                boxWidth: 7,
                usePointStyle: true,
                pointStyle: "circle"
              },
            },
            title: {
              position: "top",
              align: "start",
              text: "Doughnut Example",
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

    <style jsx>{`
      .card {
        position: relative;
        width: 600px;
        height: 600px;
        padding: 50px;
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
