import React from "react";
import CashBoard from "./CashBoard";
const Dashboard: React.FC = () => {
  return (
    <div className="ms-[88px] grid grid-cols-3 gap-8 p-7">
      <CashBoard />
    </div>
  );
};

export default Dashboard;
