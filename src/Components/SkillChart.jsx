// BarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Skill Chart',
            data: data.values,
            backgroundColor: 'rgb(165,42,42,0.8)',
            borderColor: 'brown',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} width="60% !important" height="60% !important"/>;
};

export default BarChart;
