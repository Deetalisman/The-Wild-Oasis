"use client";
import { isWithinInterval } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ cab }) {
  // CHANGE
  const { regularPrice, discount } = cab;
  const numNights = 23;
  const cabinPrice = regularPrice;
  //   const range = { from: null, to: null };

  // SETTINGS
  const minBookingLength = 1;
  const { maxcapacity } = cab;
  const maxBookingLength = maxcapacity;
  const [range, setRange] = useState({ from: undefined, to: undefined });
  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-0 flex flex-row text-sm place-self-center"
        onClick={setRange}
        mode="range"
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
      />

      <div className="flex items-center justify-between px-8 bg-amber-500 text-gray-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">{regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  {regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">{regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">{cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-gray-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
