import React from "react";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  Chart,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart: React.FC = () => {
  return (
    <div className="border rounded-xl border-white/15 p-4 py-5 flex items-end">
      <Line
        className="w-full h-full"
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(199, 24, 62)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45, 42, 48, 50, 60, 70],
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

export default LineChart;
