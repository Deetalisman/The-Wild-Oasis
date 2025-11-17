const Profile = () => {
  const nationality = "portugal";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-amber-400 mb-2">
        Update your guest profile
      </h2>

      <p className="text-[1rem] mb-7 text-gray-400">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="bg-gray-900 pt-3 px-2 rounded-lg  text-[1rem] flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input className="px-5 py-3 bg-gray-600 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input className="px-5 py-3 bg-gray-600 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
          </div>
          <select
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-gray-700 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option>Asia</option>
            <option>Europe</option>
            <option>North Ameria</option>
            <option>South America</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-amber-500 text-sm px-8 py-3 text-gray-800 cursor-pointer font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
