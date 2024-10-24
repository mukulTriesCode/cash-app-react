import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementByAmount } from "../features/cashCountSlice";
import Sidebar from "../components/Sidebar";

const CashCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state?.root?.value);
  const dispatch = useDispatch();
  const [cash, setCash] = useState(0);

  const handleCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCash(Number(e.target.value));
  };

  const handleAddAmount = () => {
    dispatch(incrementByAmount(cash));
    setCash(0); // Reset the input field after adding the amount
  };

  return (
    <>
      <Sidebar />
      <div className="ms-80">
        <h2>Total amount: {count}</h2>
        <div className="flex gap-4">
          <input
            className="bg-transparent border border-white p-3 px-5 rounded-md"
            type="number"
            name="counter"
            id="counter"
            value={cash}
            onChange={handleCashChange}
          />
          <button onClick={handleAddAmount}>Add amount</button>
        </div>
      </div>
    </>
  );
};

export default CashCounter;
