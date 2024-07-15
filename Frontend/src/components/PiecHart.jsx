// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Sample data
  const data = {
    labels: ['Verificados', 'Pendientes', 'Invalidos'],
    datasets: [
      {
        label: '',
        data: [2, 1, 1],
        backgroundColor: [
          'rgba(147, 250, 165, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(147, 250, 165, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráficos Validados',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
