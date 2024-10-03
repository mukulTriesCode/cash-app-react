import React from "react";
import CashBoard from "./CashBoard";
import CategorySlider from "./CategorySlider";

const Dashboard: React.FC = () => {
  return (
    <div className="ms-[88px] grid grid-cols-3 gap-8 p-7">
      <CashBoard />
      <CategorySlider />
    </div>
  );
};

export default Dashboard;
