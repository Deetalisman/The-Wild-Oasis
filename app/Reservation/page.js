import DateSelector from "../Dateselector/page";
import ReservationForm from "../Reservationform/page";

const Reservation = ({ cab }) => {
  return (
    <div className="grid grid-cols-2 mt-10">
      <DateSelector cab={cab} />
      <ReservationForm cab={cab} />
    </div>
  );
};

export default Reservation;
