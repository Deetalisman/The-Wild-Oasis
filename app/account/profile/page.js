"use client";
import { useState, useEffect } from "react";

const Profile = () => {
  const [profileDetails, setprofileDetails] = useState([]);
  const [name, setName] = useState("");
  const [openDetails, setOpenDetails] = useState([]);
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [nationalID, setNationalID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    const newclient = {
      name,
      email,
      nationalID,
      nationality,
    };
    setprofileDetails(newclient);
    console.log(profileDetails);
    // openDetails === 1 ? setOpenDetails(2) : setOpenDetails(3);
    console.log(openDetails);
    localStorage.setItem("detalee", JSON.stringify(newclient));
  };
  useEffect(() => {
    const detailList = JSON.parse(localStorage.getItem("detalee")) || [];
    const useremail = JSON.parse(localStorage.getItem("useremail")) || [];
    setOpenDetails(detailList);
    setEmail(useremail);
    console.log(email);
    console.log(openDetails);
  }, []);
  return (
    <div>
      {openDetails != "" ? (
        <Displaydetails
          profileDetails={profileDetails}
          openDetails={openDetails}
        />
      ) : (
        <Profileform
          handleSubmit={handleSubmit}
          email={email}
          // name={name}
          setName={setName}
          setEmail={setEmail}
          setNationalID={setNationalID}
          setNationality={setNationality}
          nationality={nationality}
          nationalID={nationalID}
        />
      )}
    </div>
  );
};

export default Profile;

const Profileform = ({
  setEmail,
  // setName,
  setNationalID,
  setNationality,
  name,
  email,
  nationalID,
  handleSubmit,
  nationality,
}) => {
  return (
    <div className="pb-10">
      <h2 className="font-semibold text-2xl text-amber-400 mb-2">
        Update your guest profile
      </h2>

      <p className="text-[1rem] mb-7 text-gray-400">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 pt-3 px-2 rounded-lg  text-[1rem] flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="px-5 py-1 mt-1 bg-gray-600 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            placeholder={email}
            value={email}
            disabled
            className="px-5 py-1 mt-1  bg-gray-600 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
          </div>
          <select
            name="nationality"
            id="nationality"
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
            className="px-5 py-2 mt-1 bg-gray-700 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option>Asia</option>
            <option>Europe</option>
            <option>Africa</option>
            <option>Australia</option>
            <option>North Ameria</option>
            <option>South America</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">Phone number</label>
          <input
            name="nationalID"
            onChange={(e) => setNationalID(e.target.value)}
            value={nationalID}
            className="px-5 py-1 mt-1 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button
            type="submit"
            className="bg-amber-500 text-sm mb-4 rounded-2xl px-8 py-3 text-gray-800 cursor-pointer font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

const Displaydetails = ({ profileDetails, openDetails }) => {
  return (
    <div>
      <p className="text-sm">
        <span className="font-bold text-gray-400 text-lg">
          {" "}
          Hello {openDetails.name},
        </span>{" "}
      </p>
      <p className="mt-3">
        We now have your details and you are ready to book our cabins...
      </p>
    </div>
  );
};
