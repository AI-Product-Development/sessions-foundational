import React from 'react';
import { Map } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export function Heatmap() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          color: 'hsl(var(--muted-foreground))',
        },
        grid: {
          color: 'hsl(var(--muted-foreground) / 0.2)',
        },
      },
      x: {
        min: 0,
        max: 94,
        ticks: {
          stepSize: 10,
          color: 'hsl(var(--muted-foreground))',
        },
        grid: {
          color: 'hsl(var(--muted-foreground) / 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'hsl(var(--card-foreground))',
          font: {
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Position: (${context.parsed.x}, ${context.parsed.y})`;
          },
        },
      },
    },
  };

  const generatePoints = () => {
    const points = [];
    for (let i = 0; i < 50; i++) {
      points.push({
        x: Math.random() * 94,
        y: Math.random() * 50,
      });
    }
    return points;
  };

  const data = {
    datasets: [
      {
        label: 'Stephen Curry Movement',
        data: generatePoints(),
        backgroundColor: '#93C5FD', // Brighter blue
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Map className="h-5 w-5 text-primary mr-2" />
        <h2 className="text-xl font-semibold text-card-foreground">Player Heatmap</h2>
      </div>
      <div className="h-64">
        <Scatter options={options} data={data} />
      </div>
    </div>
  );
}