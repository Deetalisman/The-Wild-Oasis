"use client";

import DateSelector from "./Dateselector/page";
import ReservationForm from "./Reservationform/page";

export default function Reservation({ cab }) {
  return (
    <div className="md:grid grid-cols-2 mt-10">
      <DateSelector />
      <ReservationForm cab={cab} />
    </div>
  );
}
