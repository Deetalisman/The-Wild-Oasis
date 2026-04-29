"use client";
import { el } from "date-fns/locale";
import { useEffect, useState } from "react";

export default function ReservationForm({ cab }) {
  const maxCapacity = 5;
  const [nameofuser, setNameofuser] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [observation, setObservation] = useState("");
  const [verify, setVerify] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [booked, setBooked] = useState(false);
  const [exist, setExist] = useState(false);
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("username")) || [];
    setNameofuser(name);
    console.log(name);
    if (nameofuser === "") {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameofuser != "") {
      setloggedIn(true);
      console.log("logged in");
      console.log(cab);
      const cabinName = cab.name;
      const cabinImage = cab.image;
      console.log(cabinName);
      const night = JSON.parse(localStorage.getItem("night")) || [];
      console.log(night);
      if (night.length === 0) {
        console.log("Select date");
        setVerify(true);
      }
      if (night.length !== 0) {
        const price = JSON.parse(localStorage.getItem("price")) || [];
        // const checkInDate = JSON.parse(localStorage.getItem("checkin")) || [];
        // console.log(checkInDate);
        const bookingInfo = {
          id: Date.now(),
          numGuests,
          observation,
          night,
          price,
          cabinName,
          cabinImage,
        };
        console.log(bookingInfo);
        setVerify(false);
        const reservation =
          JSON.parse(localStorage.getItem("resavation")) || [];
        const reservationExists = (newBooking, reservations) => {
          return reservations.some(
            (res) =>
              res.cabinName === newBooking.cabinName &&
              res.night === newBooking.night,
          );
        };

        if (reservationExists(bookingInfo, reservation)) {
          function showMessages() {
            setExist(true);
            console.log("book");

            setTimeout(() => {
              setExist(false);
            }, 3000); // 3 seconds
          }

          showMessages();
          return false;
        }
        const updatedDetail = [...reservation, bookingInfo];
        console.log(updatedDetail);
        localStorage.setItem("resavation", JSON.stringify(updatedDetail));
        // alert("cabin booked....");
        // form.reset();
        setObservation("");
        setNumGuests("");
        function showMessage() {
          setBooked(true);
          console.log("book");

          setTimeout(() => {
            setBooked(false);
          }, 3000); // 3 seconds
        }

        showMessage();
      }
    } else {
      setloggedIn(false);
      console.log("Not logged in");
      console.log(loggedIn);
    }
  };
  return (
    <div className="scale-[1.01] md:mx-0 sm:mx-[10%] mx-[2.7%] md:mt-0  mt-[3rem]">
      <div className="bg-gray-700 text-gray-300 px-16 py-2 flex justify-between items-center">
        {!loggedIn ? (
          <p>You need to sign in first</p>
        ) : (
          <p>
            Logged in as
            <span className="text-amber-400 ml-2">{nameofuser}</span>
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 py-10 px-[5%] lg:px-16 text-[1rem] flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            onChange={(e) => setNumGuests(e.target.value)}
            className="px-5 py-3 bg-gray-300 mt-2 text-gray-800 w-full shadow-sm rounded-sm"
            required
            value={numGuests}
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x} className="mt-2">
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            onChange={(e) => setObservation(e.target.value)}
            className="px-5 py-3 bg-gray-300 text-gray-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
            value={observation}
          />
        </div>

        <div className="flex justify-end mt-5 items-center gap-6">
          {verify && <p className="text-red-300 text-base">Select dates</p>}
          {!loggedIn && (
            <p className="text-red-300 text-base">Sign in to book</p>
          )}
          {booked && (
            <p className="text-xl text-amber-500 ">Cabin booked....</p>
          )}
          {exist && (
            <p className="text-[1rem] text-amber-500 ">
              Reservation already exist...
            </p>
          )}
          <button
            type="submit"
            className="bg-amber-500 text-[0.8rem] md:text-lg rounded-2xl cursor-pointer md:px-8 px-6 py-2 md:py-4 text-gray-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}
