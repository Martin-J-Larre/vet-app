import { useEffect } from "react";
import { PetBox } from "./PetBox";

export const ListPet = ({ pets, setPet }) => {
  useEffect(() => {
    if (pets.length > 0) {
      console.log("New pet added");
    }
  }, [pets]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pets && pets.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListPet</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admin{" "}
            <span className="text-indigo-600 font-bold">
              pets and appoiment
            </span>
          </p>
          {pets.map((pet) => (
            <PetBox key={pet.id} pet={pet} setPet={setPet} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">ListPet</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            <span className="text-indigo-600 font-bold">
              There are not pets
            </span>
          </p>
        </>
      )}
    </div>
  );
};
