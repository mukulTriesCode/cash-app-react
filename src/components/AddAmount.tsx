import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementByAmount,
  incrementByAmount,
} from "../features/cashCountSlice";
import CalenderComponent from "@/components/Calender";
const AddAmount: React.FC = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<{ amount?: string }>({});
  const initialState = {
    amount: 0,
    notes: "",
  };
  const [entry, setEntry] = useState({ ...initialState });

  const handleCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "counter") {
      setEntry((prev) => ({ ...prev, amount: Number(e.target.value) }));
      setErrors((prev) => ({ ...prev, amount: "" }));
    } else if (e.target.name === "notes") {
      setEntry((prev) => ({ ...prev, notes: e.target.value }));
    }
  };

  const handleAddAmount = () => {
    if (entry?.amount) {
      dispatch(
        incrementByAmount({ amount: entry?.amount, notes: entry?.notes })
      );
      setEntry(initialState);
      setErrors((prev) => ({ ...prev, amount: "" }));
    } else {
      setErrors((prev) => ({ ...prev, amount: "Please enter the amount" }));
    }
  };

  const handleRemoveAmount = () => {
    if (entry?.amount) {
      dispatch(
        decrementByAmount({ amount: entry?.amount, notes: entry?.notes })
      );
      setEntry(initialState);
    }
  };
  return (
    <div className="flex gap-4 flex-col w-full border border-white/15 p-4 rounded-md bg-[#131313]">
      <div className="flex flex-col gap-2">
        <label htmlFor="counter" className="py-1 flex gap-3">
          <p>Enter cash amount</p>
          {errors?.amount && (
            <p className="text-red-600">( {errors?.amount} )</p>
          )}
        </label>
        <input
          className={`bg-transparent border border-white/15 p-3 px-5 rounded-md ${
            errors?.amount ? "border-red-600" : ""
          }`}
          type="number"
          name="counter"
          id="counter"
          placeholder="--"
          value={entry?.amount ? entry?.amount : ""}
          onChange={handleCashChange}
        />
        <label htmlFor="notes" className="py-1">
          <p>Enter a note (optional)</p>
        </label>
        <input
          className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
          type="text"
          name="notes"
          id="notes"
          value={entry?.notes}
          onChange={handleCashChange}
        />
        <CalenderComponent />
      </div>
      <div className="flex gap-4">
        <button
          className={`w-full text-center px-4 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg cursor-pointer`}
          onClick={handleAddAmount}
        >
          Cash In
        </button>
        <button
          className={`w-full text-center px-4 py-3 bg-red-700 hover:bg-red-800 transition rounded-lg cursor-pointer`}
          onClick={handleRemoveAmount}
        >
          Cash Out
        </button>
      </div>
    </div>
  );
};

export default AddAmount;
