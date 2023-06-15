import React from "react";

export const PetBox = ({ pet, setPet }) => {
  const { name, family, email, date, symptoms } = pet;
  return (
    <div className="mx-5 my-6 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Family: <span className="font-normal normal-case">{family}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        discharged: <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold uppercase rounded-lg"
          onClick={() => setPet(pet)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
