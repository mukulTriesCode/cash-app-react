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
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { months } from "@/lib/utils";
import { Entry } from "@/features/cashCountSlice";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement
);

const CashChart: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const root = useSelector((state: RootState) => state?.root);
  const entries = root?.entries || [];
  const monthData = entries.reduce(
    (acc: { month: string; amount: number }[], entry: Entry) => {
      const monthIndex = Number(entry.date.split("/")[0]) - 1;
      const monthLabel = months[monthIndex]?.label;
      const existingMonth = acc.find((item) => item.month === monthLabel);
      if (existingMonth) {
        existingMonth.amount += entry.isCashIn ? entry.amount : -entry.amount;
      } else {
        acc.push({
          month: monthLabel,
          amount: entry.isCashIn ? entry.amount : -entry.amount,
        });
      }
      return acc;
    },
    []
  );

  const monthEntries = months.map((month) => {
    const monthAmount =
      monthData.find((item) => item.month === month.label)?.amount || 0;
    return { month: month.label, amount: monthAmount };
  });

  const data = monthEntries.map((item) => ({
    month: item.month,
    amount: item.amount,
  }));

  const labels = data.map((item) => item.month);
  const amounts = data.map((item) => item.amount);

  const chartTypes = [
    { type: "bar", label: "Bar Graph" },
    { type: "line", label: "Line Chart" },
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#34D178",
        borderColor: "#34D178",
        data: amounts,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
          aria-label={item?.label}
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

  return (
    <div className="bg-gradient-to-bl h-full from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg">
      <div className="p-4 w-full h-full rounded-xl bg-black flex flex-col justify-between">
        <div className="inline-flex items-center justify-center gap-2">
          {chartTypeOptions}
        </div>
        {chartType === "bar" ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default CashChart;
