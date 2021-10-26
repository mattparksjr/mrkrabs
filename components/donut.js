import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [400, 100, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};


export default function Donut() {
  return (
      <Doughnut
        data={data}
        width={600}
        height={600}
        options={{ maintainAspectRatio: false }}
      />);
}