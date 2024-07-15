// App.js
import React from 'react';
import BarChart from './BarChart';
import PieChart from './PiecHart';

function Chart() {
  return (
    <div className="container mt-5">
        <div className="card">
        <div className="card-body">
 <div className="App">
      <h1>Dashboard</h1>
      <BarChart />
      <div className='chart-container'>
      <PieChart></PieChart>
      </div>
      </div>
    </div>
    </div>
    </div>
   
  );
}

export default Chart;