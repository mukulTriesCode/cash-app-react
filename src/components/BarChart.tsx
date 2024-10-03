import React from "react";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  Chart,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const BarChart: React.FC = () => {
  return (
    <div className="border border-red-50">
      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
