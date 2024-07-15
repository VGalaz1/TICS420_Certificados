// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data
  const data = {
    
    labels: ['Ingeniería Civil Informatica', 'Ingeniería Civil Industrial', 'Ingeniería Civil en Minas', 'Derecho', 'Periodismo', 'Psicología'],
    datasets: [
      {
        label: 'Número de certificados',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
        display: false, // Hide the legend entirely
      },
      title: {
        display: true,
        text: 'Certificados por carrera',
      },
  };
  return <Bar data={data} options={options} />;
};

export default BarChart;
