import React, { Suspense } from "react";
const CashBoard = React.lazy(() => import("./CashBoard"));
const CategorySlider = React.lazy(() => import("./CategorySlider"));
const CashChart = React.lazy(() => import("./CashChart"));
const TransactionHistory = React.lazy(() => import("./TransactionHistory"));
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-7 xl:grid-cols-3 gap-4 xs:gap-8 p-4 xs:p-7">
      <div className="col-span-7 xl:col-span-2">
        <Suspense fallback={<div></div>}>
          <CashBoard />
        </Suspense>
      </div>
      <div className="col-span-7 sm:col-span-4 xl:col-span-1">
        <Suspense fallback={<div></div>}>
          <CashChart />
        </Suspense>
      </div>
      <div className="col-span-7 xl:col-span-2 order-4 xl:order-none">
        <Suspense fallback={<div></div>}>
          <CategorySlider />
        </Suspense>
      </div>
      <div className="col-span-7 sm:col-span-3 xl:col-span-1">
        <Suspense fallback={<div></div>}>
          <TransactionHistory />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
