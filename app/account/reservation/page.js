"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Reservations = () => {
  // const [details, setDetails] = useState([]);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const Guestdetail = JSON.parse(localStorage.getItem("resavation")) || [];
    setBookings(Guestdetail);
  }, []);
  const handleclear = () => {
    localStorage.setItem("resavation", JSON.stringify([]));
    setBookings([]);
    console.log("cleared");
  };
  const handledelete = (id) => {
    // Get the bookings array
    const books = JSON.parse(localStorage.getItem("resavation")) || [];
    let bookin = bookings.filter((booking) => booking.id !== id);
    setBookings(bookin);
    // filter out the one to delete
    const updated = books.filter((book) => book.id !== id);
    localStorage.setItem("resavation", JSON.stringify(updated));

    console.log("deleted");
  };
  return (
    <div>
      <h2 className="font-semibold text-xl lg:text-2xl text-amber-400 mb-7">
        Your reservations.
      </h2>

      {bookings.length === 0 ? (
        <p className="text-sm sm:text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-gray-500" href="/cabin">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <table className="m-0">
          <thead>
            <tr className="lg:text-[1rem] p-0  text-sm">
              <th className="lg:px-2 md:px-1 px-2 m-0">Cabin</th>
              <th className="lg:px-4 md:px-1 px-2">Nights</th>
              <th className="lg:px-4 md:px-1 px-2">Guests</th>
              {/* <th className="lg:px-4 md:px-1 px-1">Price/Night</th> */}
              <th className="lg:px-4 md:px-1 px-2">TotalPrice</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <tbody key={booking.id} className="">
              <tr className="lg:text-[1rem] text-sm text-gray-400">
                <td className="px-0 px-2 w-0">{booking.cabinName}</td>
                <td className="sm:px-4 px-2 py-4">{booking.night}</td>
                <td className="sm:px-4 px-2 py-4">{booking.numGuests}</td>
                {/* <td className="sm:px-4 py-4">${booking.price}</td> */}
                <td className="sm:px-4 px-2 py-4">
                  ${booking.night * booking.price}
                </td>
                <button
                  onClick={() => handledelete(booking.id)}
                  className="text-sm mt-4 bg-amber-500 text-black cursor-pointer rounded-sm px-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
          <button
            onClick={handleclear}
            className="mt-8 w-[8rem] text-sm mb-14 px-2 text-black py-1 rounded-lg bg-amber-300 cursor-pointer"
          >
            Clear all bookings
          </button>
        </table>
      )}
    </div>
  );
};

export default Reservations;
