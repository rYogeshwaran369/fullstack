import React from 'react';
import Chart from 'react-apexcharts';
import { Panel } from 'rsuite';

const PieChart = ({ title, data, type, labels, options }) => {
  const defaultOptions = {
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: '75%'
        },
        offsetY: 0
      },
      stroke: {
        colors: undefined
      }
    },
    colors: ['#5f71e4', '#2dce88', '#fa6340', '#f5365d', '#13cdef'],
    legend: {
      position: 'bottom',
      offsetY: 0
    }
  };

  return (
    <Panel className="card" style={{ height: 380 }} bodyFill header={title}>
      <Chart
        series={data}
        type={type}
        height={340}
        options={{ ...defaultOptions, ...options, labels }}
      ></Chart>
    </Panel>
  );
};

export default PieChart;
