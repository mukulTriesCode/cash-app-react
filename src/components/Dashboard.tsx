import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";
import BarChart from "./BarChart";

const Dashboard: React.FC = () => {
  return (
    <div className="ms-[88px] grid grid-cols-3 gap-8 p-7">
      <CashBoard />
      <BarChart />
      <CategorySlider />
      <BarChart />
    </div>
  );
};

export default Dashboard;
