"use client";
import { use, useEffect } from "react";
import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { CabinsData } from "../../Api/api";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { isWithinInterval } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CabinDetails = ({ params }) => {
  const { id } = use(params);
  const cab = CabinsData.find((item) => item.id === id);
  console.log(cab);
  const router = useRouter();

  return (
    <div className="pb-10">
      <FaCircleArrowLeft
        onClick={() => router.back()}
        className="text-xl text-amber-400 cursor-pointer"
      />
      <div className="md:flex justify-between">
        <Image
          src={cab.image}
          alt={cab.name}
          width={500}
          className="h-90 md:h-130 object-cover md:mx-0 sm:mx-[10%] mx-[5%] rounded-tl-3xl rounded-br-3xl object-top sm:w-[80%] w-[90%] md:w-[40%] mt-8"
        />
        <div className="w-[100%] md:w-[50%] mt-15 text-gray-300">
          <h1 className=" text-3xl md:text-5xl font-bold text-gray-200">
            {cab.name}
          </h1>
          <p className="mt-5 text-sm text-gray-400 tracking-wide sm:text-xltracking-wide">
            {cab.description} {cab.name}. {cab.fulldescription}
          </p>
          <div className="text-[1rem] mt-10 flex">
            <BsFillPeopleFill className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              For up to{" "}
              <span className="font-bold text-[1.2rem]">{cab.maxCapacity}</span>{" "}
              guests.
            </p>
          </div>
          <div className="text-[1rem] mt-4 flex">
            <FaLocationDot className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              Located in the heart of the{" "}
              <span className="font-bold text-[1.2rem]">
                {cab.location}
              </span>{" "}
            </p>
          </div>
          <div className="text-[1rem] mt-4 flex">
            <FaEyeSlash className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              Privacy{" "}
              <span className="font-bold text-[1.2rem]">
                {cab.privacylevel}
              </span>{" "}
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-xl sm:text-2xl lg:text-3xl">
        Reserve {cab.name} today! Pay on arrival.
      </h1>
      <Reservationn cab={cab} />
    </div>
  );
};

export default CabinDetails;

function Reservationn({ cab }) {
  return (
    <div className="md:grid grid-cols-2 mt-10">
      <DateSelector />
      <ReservationForm cab={cab} />
    </div>
  );
}

function DateSelector() {
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
    // const checkIn = range?.from.toISOString();
    const night = JSON.parse(localStorage.getItem("night")) || [];
    const price = JSON.parse(localStorage.getItem("price")) || [];
    // const checkin = JSON.parse(localStorage.getItem("check")) || [];
    localStorage.setItem("night", JSON.stringify(nights));
    // if (totalPrice) {
    localStorage.setItem("price", JSON.stringify(regularPrice));
    // localStorage.setItem("checkin", JSON.stringify(checkIn));
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

function ReservationForm({ cab }) {
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
            }, 3000);
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
