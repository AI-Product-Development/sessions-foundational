import React from 'react';
import { TrendingUp } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function TeamTrends() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'hsl(var(--card-foreground))',
          font: {
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'hsl(var(--muted-foreground) / 0.2)',
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
        },
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Warriors',
        data: [110, 115, 108, 120, 112, 118],
        borderColor: '#93C5FD', // Brighter blue
        backgroundColor: 'rgba(147, 197, 253, 0.5)',
        borderWidth: 3,
        tension: 0.3,
      },
      {
        label: 'Lakers',
        data: [105, 112, 118, 108, 115, 110],
        borderColor: '#FDE047', // Brighter yellow
        backgroundColor: 'rgba(253, 224, 71, 0.5)',
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-5 w-5 text-primary mr-2" />
        <h2 className="text-xl font-semibold text-card-foreground">Team Performance Trends</h2>
      </div>
      <div className="h-64">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}