import { useState, useEffect } from "react";
import { Error } from "./Error";

export const Form = ({ pets, setPets, pet, setPet }) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pet).length > 0) {
      setName(pet.name);
      setFamily(pet.family);
      setEmail(pet.email);
      setDate(pet.date);
      setSymptoms(pet.symptoms);
    }
  }, [pet]);

  const idGenerator = () => {
    return Math.trunc(Math.random()).toString(36) + Date.now().toString(36);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, family, email, date, symptoms].includes("")) {
      console.log("Fiels should not be empty");
      setError(true);
      return;
    }
    setError(false);
    const objPet = {
      name,
      family,
      email,
      date,
      symptoms,
    };

    if (pet.id) {
      objPet.id = pet.id;
      const petsUpdated = pets.map((petState) =>
        petState.id === pet.id ? objPet : petState
      );
      setPets(petsUpdated);
      setPet({});
    } else {
      objPet.id = idGenerator();
      setPets([...pets, objPet]);
    }

    setName("");
    setFamily("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Traking pets</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add pet and{" "}
        <span className="text-indigo-600 font-bold ">management</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={family}
            onChange={(e) => setFamily(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          {error && <Error> Fiels should not be empty </Error>}
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={pet.id ? "Edit pet" : "Add pet"}
        />
      </form>
    </div>
  );
};
