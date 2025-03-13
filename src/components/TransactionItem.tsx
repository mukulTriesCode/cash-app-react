import React from 'react';
import { Entry } from "@/features/cashCountSlice";
import { emojis } from '@/lib/utils';

interface TransactionItemProps {
  entry: Entry;
  isLast: boolean;
  index: number;
}

const TransactionItem: React.FC<TransactionItemProps> = React.memo(({ entry, isLast, index }) => (
  <div className={`flex items-center h-auto gap-2 py-2 px-4 border-b border-white/15 ${
    index !== 0 && isLast ? "border-none" : ""
  }`}>
    <div className="w-[40px] flex-none h-[40px] rounded-full bg-white/15 flex items-center justify-center">
      {emojis[entry?.notes?.length > emojis.length ? entry?.notes?.length - emojis.length : entry?.notes?.length]}
    </div>
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col justify-center gap-2">
        <p>{entry?.notes || "--"}</p>
        <p>{entry?.date ? new Date(entry?.date).toLocaleDateString() : "--"}</p>
      </div>
      <div className={`text-lg ${entry?.isCashIn ? "text-green-500" : "text-red-500"}`}>
        <p>₹ {entry?.amount}</p>
      </div>
    </div>
  </div>
));

TransactionItem.displayName = 'TransactionItem';
export default TransactionItem;