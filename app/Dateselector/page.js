"use client";
import { isWithinInterval } from "date-fns";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DateSelector() {
  // CHANGE
  const regularPrice = 20;
  const numNights = 23;
  const cabinPrice = regularPrice;
  const minBookingLength = 1;
  const { maxcapacity } = 5;
  const maxBookingLength = maxcapacity;
  const [range, setRange] = useState();
  const [bookingData, setBookingData] = useState({
    nights: 0,
    totalPrice: 0,
  });
  const nights =
    range?.from && range?.to
      ? Math.ceil(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;
  useEffect(() => {
    setBookingData({
      nights: nights,
      totalPrice: nights * regularPrice,
    });
    const night = JSON.parse(localStorage.getItem("night")) || [];
    const price = JSON.parse(localStorage.getItem("price")) || [];
    localStorage.setItem("night", JSON.stringify(nights));
    // if (totalPrice) {
    localStorage.setItem("price", JSON.stringify(regularPrice));
    // }
    console.log(nights);
    const totalPrice = nights * regularPrice;
    console.log(totalPrice);
  }, [nights, regularPrice]);
  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-0 flex flex-row text-sm place-self-center"
        onSelect={setRange}
        mode="range"
        fromDate={new Date()}
        selected={range}
        min={minBookingLength}
        max={maxBookingLength}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={{ before: new Date() }}
      />

      <div className="flex items-center md:mx-0 sm:mx-[10%] mx-[2.7%] justify-center sm:px-[4%] lg:px-8 bg-amber-500 text-gray-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 text-lg font-bold items-baseline">
            £{regularPrice}
            <span className="">/night</span>
          </p>
          {nights ? (
            <>
              <p className="bg-accent-600  py-2 text-2xl">
                <span>&times;</span> {nights}
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl ml-2 font-semibold">
                  £{regularPrice * nights}
                </span>
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
