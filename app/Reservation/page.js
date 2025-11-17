import DateSelector from "../Dateselector/page";
import ReservationForm from "../Reservationform/page";

const Reservation = () => {
  return (
    <div className="grid grid-cols-2 mt-10">
      <DateSelector />
      <ReservationForm />
    </div>
  );
};

export default Reservation;
