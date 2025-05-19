import React, { useState } from "react";
import { useSelector } from "react-redux";
import CalenderComponent from "@/components/Calender";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";
import { useAddEntryMutation } from "@/services/entryService";

const AddAmount: React.FC = () => {
  const entryData = useSelector((state: RootState) => state.root);
  const [addEntry] = useAddEntryMutation();

  const [errors, setErrors] = useState<{ amount?: string; notes?: string }>({});
  const initialState = {
    id: "",
    amount: 0,
    notes: "",
    date: "",
    category: "",
  };
  const [entry, setEntry] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
    if (name === "amount") {
      setErrors((prev) => ({ ...prev, amount: "" }));
    }
  };

  const handleSelectCategory = (value: string) => {
    setEntry((prev) => ({ ...prev, category: value }));
  };


  const handleAmountChange = async (isCashOut: boolean) => {
    console.log("entry", entry);
    if (entry.amount > 0 && entry.notes.length > 0) {
      try {
        const response = await fetch("/api/entry/add-entry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: entry.amount,
            date: entry.date,
            notes: entry.notes,
            category: entry.category,
            isCashIn: !isCashOut,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add entry");
        }

        const data = await response.json();
        console.info(data);

        // Dispatch to Redux store
        dispatch(
          cashCountSlice.actions.addEntry({
            entries: [
              {
                ...entry,
                id: `INV${entryData?.entries.length}`,
                isCashIn: !isCashOut,
              },
            ],
            isCashIn: !isCashOut,
          })
        );

        setEntry(initialState);
        const categoryInput = document.getElementById(
          "category-input"
        ) as HTMLSelectElement;
        if (categoryInput) categoryInput.value = "";
        setErrors({});
      } catch (error) {
        console.error("Error adding entry:", error);
        setErrors((prev) => ({
          ...prev,
          amount: "Failed to add entry. Please try again.",
        }));
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        amount: entry.amount <= 0 ? "Please enter a valid amount" : "",
        notes: entry.notes.length <= 0 ? "Please enter a note" : "",
      }));
    }
  };

  return (
    <div className="flex gap-4 flex-col w-full border border-white/15 p-4 rounded-md bg-[#131313]">
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="py-1 flex gap-3">
          <p>Enter cash amount : *</p>
          {errors.amount && <p className="text-red-600">({errors.amount})</p>}
        </label>
        <input
          className={`bg-transparent border border-white/15 p-3 px-5 rounded-md ${
            errors.amount ? "border-red-600" : ""
          }`}
          type="number"
          name="amount"
          id="amount"
          placeholder="--"
          value={entry.amount || ""}
          onChange={handleChange}
        />
        <label htmlFor="notes" className="py-1 flex gap-3">
          <p>Enter a note :</p>
          {errors.notes && <p className="text-red-600">({errors.notes})</p>}
        </label>
        <input
          className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
          type="text"
          name="notes"
          id="notes"
          placeholder="--"
          value={entry.notes}
          onChange={handleChange}
        />
        <CalenderComponent
          onChange={(date) => {
            setEntry((prev) => ({ ...prev, date: date.toLocaleDateString() }));
          }}
        />
        <label htmlFor="category" className="py-1">
          <p>Add / Select a category :</p>
        </label>
        <Select onValueChange={handleSelectCategory}>
          <input
            type="text"
            id="category-input"
            onChange={(e) => handleSelectCategory(e.target.value)}
            placeholder="Add Category"
            className="bg-transparent h-auto text-base border border-white/15 p-3 px-5 rounded-md placeholder:text-white"
          />
          <SelectTrigger className="bg-transparent h-auto text-base border border-white/15 p-3 px-5 rounded-md">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-[#131313] border-white/15 text-white w-full">
            <SelectItem
              className="[&&]:bg-[#131313] hover:[&&]:bg-[#2e2e2e] [&&]:text-white hover:[&&]:text-white transition p-3 px-5"
              value="--"
            >
              --
            </SelectItem>
            {entryData?.categories &&
              entryData?.categories?.length > 0 &&
              entryData?.categories.map((category) => (
                <React.Fragment key={category?.name}>
                  {category?.name && (
                    <SelectItem
                      className="[&&]:bg-[#131313] hover:[&&]:bg-[#2e2e2e] [&&]:text-white hover:[&&]:text-white transition p-3 px-5 capitalize"
                      value={category?.name.toLowerCase()}
                    >
                      {category?.name}
                    </SelectItem>
                  )}
                </React.Fragment>
              ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex lg:flex-col xl:flex-row gap-4">
        <button
          className="w-full text-center px-4 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg cursor-pointer"
          onClick={() => handleAmountChange(false)}
        >
          Cash In
        </button>
        <button
          className="w-full text-center px-4 py-3 bg-red-700 hover:bg-red-800 transition rounded-lg cursor-pointer"
          onClick={() => handleAmountChange(true)}
        >
          Cash Out
        </button>
      </div>
    </div>
  );
};

export default AddAmount;
