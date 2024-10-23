import React, { useState } from "react";
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

const CashChart: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const data = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 10 },
    { label: "Mar", value: 5 },
    { label: "Apr", value: 2 },
    { label: "May", value: 20 },
    { label: "Jun", value: 30 },
    { label: "Jul", value: 45 },
    { label: "Aug", value: 42 },
    { label: "Sep", value: 48 },
    { label: "Oct", value: 50 },
    { label: "Nov", value: 60 },
    { label: "Dec", value: 70 },
  ];

  const labels = data.map((item) => item.label);
  const values = data.map((item) => item.value);

  const chartTypes = [
    { type: "bar", label: "Bar Graph" },
    { type: "line", label: "Line Chart" },
  ];

  const chartTypeOptions = chartTypes.map((item) => (
    <div
      key={item.type}
      className={`w-full text-center px-3 py-2 ${
        chartType === item.type ? "bg-white/10" : ""
      } hover:bg-white/15 transition rounded-lg cursor-pointer`}
      onClick={() => setChartType(item.type as "bar" | "line")}
    >
      <span className="text-lg font-medium text-foreground dark:text-gray-300">
        {item.label}
      </span>
      <label htmlFor="chart-type">
        <input
          type="radio"
          name="chart-type"
          value={item.type}
          checked={chartType === item.type}
          onChange={() => setChartType(item.type as "bar" | "line")}
          className="sr-only peer"
        />
      </label>
    </div>
  ));

  const chartComponents: Record<"bar" | "line", JSX.Element> = {
    bar: (
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "#34D178",
              borderColor: "#34D178",
              data: values,
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
    ),
    line: (
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "#34D178",
              borderColor: "#34D178",
              data: values,
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
    ),
  };

  return (
    <div className="bg-gradient-to-bl from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg">
      <div className="p-4 w-full h-full rounded-xl bg-black flex flex-col justify-between">
        <div className="inline-flex items-center justify-center gap-2">
          {chartTypeOptions}
        </div>
        {chartComponents[chartType]}
      </div>
    </div>
  );
};

export default CashChart;
