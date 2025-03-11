import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";
import CashChart from "./CashChart";
import TransactionHistory from "./TransactionHistory";
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-7 xl:grid-cols-3 gap-8 p-7">
      <div className="col-span-7 xl:col-span-2">
        <CashBoard />
      </div>
      <div className="col-span-7 sm:col-span-4 xl:col-span-1">
        <CashChart />
      </div>
      <div className="col-span-7 xl:col-span-2 order-4 xl:order-none">
        <CategorySlider />
      </div>
      <div className="col-span-7 sm:col-span-3 xl:col-span-1">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Dashboard;
