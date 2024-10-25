import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  decrementByAmount,
  incrementByAmount,
} from "../features/cashCountSlice";
const AddEntry: React.FC = () => {
  const cashEntry = useSelector((state: RootState) => state?.root);
  const dispatch = useDispatch();
  const initialState = {
    amount: 0,
    notes: "",
  };
  const [entry, setEntry] = useState({ ...initialState });

  const handleCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "counter") {
      setEntry((prev) => ({ ...prev, amount: Number(e.target.value) }));
    } else if (e.target.name === "notes") {
      setEntry((prev) => ({ ...prev, notes: e.target.value }));
    }
  };

  const handleAddAmount = () => {
    dispatch(incrementByAmount({ amount: entry?.amount, notes: entry?.notes }));
    setEntry(initialState);
  };

  const handleRemoveAmount = () => {
    dispatch(decrementByAmount({ amount: entry?.amount, notes: entry?.notes }));
    setEntry(initialState);
  };

  return (
    <div className="p-7">
      <h2>Total amount: {cashEntry?.value}</h2>
      <h2>Notes: {cashEntry?.notes}</h2>
      <div className="flex gap-4 flex-col max-w-[400px]">
        <div className="flex flex-col gap-4">
          <input
            className="bg-transparent border border-white p-3 px-5 rounded-md"
            type="number"
            name="counter"
            id="counter"
            value={entry?.amount}
            onChange={handleCashChange}
          />
          <input
            className="bg-transparent border border-white p-3 px-5 rounded-md"
            type="text"
            name="notes"
            id="notes"
            value={entry?.notes}
            onChange={handleCashChange}
          />
        </div>
        <div className="flex gap-4">
          <button
            className={`w-full max-w-[250px] text-center px-4 py-3 bg-white/10 hover:bg-white/15 transition rounded-lg cursor-pointer`}
            onClick={handleAddAmount}
          >
            Cash In
          </button>
          <button
            className={`w-full max-w-[250px] text-center px-4 py-3 bg-white/10 hover:bg-white/15 transition rounded-lg cursor-pointer`}
            onClick={handleRemoveAmount}
          >
            Cash Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
