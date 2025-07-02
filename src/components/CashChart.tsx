import React, { useState, useMemo, lazy, Suspense } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
} from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { months } from "@/lib/utils";
import { Entry } from "@/features/cashCountSlice";

// Register only the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement
);

// Lazy load chart components
const Bar = lazy(() => import('react-chartjs-2').then(module => ({ default: module.Bar })));
const Line = lazy(() => import('react-chartjs-2').then(module => ({ default: module.Line })));

const CHART_TYPES = [
  { type: "bar" as const, label: "Bar View" },
  { type: "line" as const, label: "Line View" },
] as const;

const BASE_CHART_CONFIG = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  },
  dataset: {
    label: "My First dataset",
    backgroundColor: "#34D178",
    borderColor: "#34D178",
  },
};

const ChartWrapper = ({ type, data, options }: { type: "bar" | "line", data: any, options: any }) => {
  return (
    <Suspense fallback={<div className="h-[300px] grid place-items-center">Loading chart...</div>}>
      {type === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </Suspense>
  );
};

const CashChart: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const { data } = useGetEntriesQuery("");
  const entries = data?.data ?? [];

  const { labels, amounts } = useMemo(() => {
    const monthData = entries.reduce((acc: Record<string, number>, entry: Entry) => {
      const monthLabel = months[Number(entry.date.split("/")[0]) - 1]?.label;
      acc[monthLabel] = (acc[monthLabel] || 0) + (entry.isCashIn ? entry.amount : -entry.amount);
      return acc;
    }, {});

    return {
      labels: months.map(m => m.label),
      amounts: months.map(m => monthData[m.label] || 0),
    };
  }, [entries]);

  const chartData = {
    labels,
    datasets: [{
      ...BASE_CHART_CONFIG.dataset,
      data: amounts,
    }],
  };

  return (
    <div className="bg-gradient-to-bl h-full from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg">
      <div className="p-4 w-full h-full rounded-xl bg-black flex flex-col justify-between gap-4">
        <div className="inline-flex items-center justify-center gap-2">
          {CHART_TYPES.map(({ type, label }) => (
            <div
              key={type}
              className={`w-full text-center px-3 py-2 ${
                chartType === type ? "bg-white/10" : ""
              } hover:bg-white/15 transition rounded-lg cursor-pointer`}
              onClick={() => setChartType(type)}
            >
              <span className="text-lg font-medium text-foreground dark:text-gray-300">
                {label}
              </span>
              <input
                aria-label={label}
                type="radio"
                name="chart-type"
                value={type}
                checked={chartType === type}
                onChange={() => setChartType(type)}
                className="sr-only peer"
              />
            </div>
          ))}
        </div>
        <div className="h-[300px]">
          <ChartWrapper
            type={chartType}
            data={chartData}
            options={BASE_CHART_CONFIG.options}
          />
        </div>
      </div>
    </div>
  );
};

export default CashChart;
