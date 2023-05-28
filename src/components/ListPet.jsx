import { Pet } from "./Pet";

export const ListPet = ({ patiens }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">ListPet</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admin{" "}
        <span className="text-indigo-600 font-bold">
          Patients and appoiment
        </span>
      </p>
      {patiens.map((patien) => (
        <Pet key={patien.id} {...patien} />
      ))}
    </div>
  );
};
