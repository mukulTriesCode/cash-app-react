import React from "react";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  Chart,
  BarElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement
);

const BarChart: React.FC<{ chartType: "bar" | "line" }> = ({ chartType }) => {
  return (
    <div className="bg-gradient-to-bl from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg">
      <div className="p-4 w-full h-full rounded-xl bg-black flex items-end">
        {chartType === "bar" && (
          <Bar
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
                  backgroundColor: "#34D178",
                  borderColor: "#34D178",
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
        )}
        {chartType === "line" && (
          <Line
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
                  backgroundColor: "#34D178",
                  borderColor: "#34D178",
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
        )}
      </div>
    </div>
  );
};

export default BarChart;
