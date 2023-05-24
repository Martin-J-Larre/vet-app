export const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Traking patients</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patient and{" "}
        <span className="text-indigo-600 font-bold ">management</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            name pet
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Name pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="family"
            className="block text-gray-700 uppercase font-bold"
          >
            name family
          </label>
          <input
            id="family"
            type="text"
            placeholder="Name family"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharged"
            className="block text-gray-700 uppercase font-bold"
          >
            discharged
          </label>
          <input
            id="discharged"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Describe symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Add patienet"
        />
      </form>
    </div>
  );
};
