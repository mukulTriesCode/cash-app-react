import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";
import CashChart from "./CashChart";
import TransactionHistory from "./TransactionHistory";
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-7">
      <CashBoard />
      <CashChart />
      <CategorySlider />
      <TransactionHistory />
    </div>
  );
};

export default Dashboard;
