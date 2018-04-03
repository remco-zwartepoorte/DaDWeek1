import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

const data = {
  cardheading: 'Monthly Recurring Revenue',
  month: 'April',
  mrr: {
    march: 1.9,
    april: 2.4,
  },
};

const bardata = {
  labels: ['March', 'April'],
  datasets: [
    {
      backgroundColor: ['#93b3fe', '#2667ff'],
      data: [1.9, 2.4],
    },
  ],
};

function formatPrice(millions) {
  return (millions * 1000000).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

const App = () => (
  <div className="App">
    <article className="revenue-card">
      <div className="revenue-card-header">
        <h3>{data.cardheading.toUpperCase()}</h3>
        <h1>{formatPrice(data.mrr.april)}</h1>
      </div>
      <div className="revenue-card-data">
        <Bar
          data={bardata}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 4,
                    stepSize: 2,
                    fontSize: 18,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontSize: 18,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </article>
  </div>
);

export default App;
