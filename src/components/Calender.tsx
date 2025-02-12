"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CalenderComponentProps {
  onChange: (date: Date) => void;
}

const CalenderComponent: React.FC<CalenderComponentProps> = ({ onChange }) => {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger className="text-start">
        <>
          <p className="py-1 mb-2">Enter the date :</p>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left text-[16px] font-normal border-white/15 [&&]:text-white w-full py-3 [&&]:h-auto bg-[#131313] hover:bg-[#2e2e2e]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Select date</span>}
          </Button>
        </>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          className="bg-[#131313] text-white rounded-md"
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalenderComponent;
