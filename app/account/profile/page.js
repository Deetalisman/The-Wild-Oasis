"use client";
import { useState, useEffect } from "react";

const Profile = () => {
  const [fullname, setFullName] = useState("");
  const [openDetails, setOpenDetails] = useState([]);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentuser = JSON.parse(localStorage.getItem("currentuser")) || [];
    const newclient = {
      fullname,
      address,
      phonenumber,
    };
    const updatedUsers = users.map((user) => {
      if (user.email === currentuser.email && user.name === currentuser.name) {
        return {
          ...user,
          fullname: fullname,
          phone: phonenumber,
          address: address,
        };
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    const updatedCurrentUser = {
      ...currentuser,
      fullname: fullname,
      phone: phonenumber,
      address: address,
    };

    localStorage.setItem("currentuser", JSON.stringify(updatedCurrentUser));
    setOpenDetails(updatedCurrentUser);
    // setprofileDetails(newclient);
    localStorage.setItem("detalee", JSON.stringify(updatedCurrentUser));
  };
  useEffect(() => {
    const detailList = JSON.parse(localStorage.getItem("detalee")) || [];
    const useremail = JSON.parse(localStorage.getItem("useremail")) || [];
    setOpenDetails(detailList);
    setEmail(useremail);
    console.log(openDetails);
  }, []);
  return (
    <div>
      {openDetails != "" ? (
        <Displaydetails openDetails={openDetails} email={email} />
      ) : (
        <Profileform
          handleSubmit={handleSubmit}
          email={email}
          setFullName={setFullName}
          fullname={fullname}
          setEmail={setEmail}
          address={address}
          phonenumber={phonenumber}
          setAddress={setAddress}
          setPhonenumber={setPhonenumber}
        />
      )}
    </div>
  );
};

export default Profile;

const Profileform = ({
  setEmail,
  setFullName,
  fullname,
  email,
  handleSubmit,
  phonenumber,
  setPhonenumber,
  address,
  setAddress,
}) => {
  return (
    <div className="pb-10">
      <h2 className="font-semibold text-lg lg:text-2xl text-amber-400 mb-2">
        Update your guest profile
      </h2>

      <p className="text-[0.9rem] lg:text-[1rem] mb-7 text-gray-400">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 pt-3 px-2 rounded-lg  text-[1rem] flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label className="text-[0.85rem] lg:text-[1rem]">Full name</label>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            required
            className="px-5 py-1 mt-1 bg-gray-600 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[0.85rem] lg:text-[1rem]">Email address</label>
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
            <label htmlFor="address" className="text-[0.85rem] lg:text-[1rem]">
              Address
            </label>
          </div>
          <input
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
            className="px-5 py-1 mt-1 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phonenumber"
            className="text-[0.85rem] lg:text-[1rem]"
          >
            Phone number
          </label>
          <input
            name="phone number"
            onChange={(e) => setPhonenumber(e.target.value)}
            value={phonenumber}
            required
            className="px-5 py-1 mt-1 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button
            type="submit"
            className="bg-amber-500 text-[0.8rem] lg:text-sm mb-4 rounded-2xl px-4 lg:px-8 py-2 lg:py-3 text-gray-800 cursor-pointer font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

const Displaydetails = ({ openDetails, email }) => {
  return (
    <div>
      <p className="text-sm">
        <span className="font-bold text-amber-400 text-lg">
          {" "}
          Hello {openDetails.fullname},
        </span>{" "}
      </p>
      <p className="mt-2 text-sm text-gray-400">
        We now have your details and you are ready to book our cabins...
      </p>
      <div className="mt-10 text-gray-300">
        <p className="">
          Email : <span>{email}</span>
        </p>
        <p className="mt-3">
          Address : <span>{openDetails.address}</span>
        </p>
        <p className="mt-3">
          Contact Number : <span>{openDetails.phone}</span>
        </p>
      </div>
    </div>
  );
};
