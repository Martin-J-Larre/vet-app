import { useState, useEffect } from "react";
import { Header, Form, ListPet } from "./components";

function App() {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState({});

  useEffect(() => {
    const getPetSLS = () => {
      const petsLS = JSON.parse(localStorage.getItem("pets")) ?? [];
      setPets(petsLS);
    };
    getPetSLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  const deletePet = (id) => {
    const petsUpdated = pets.filter((p) => p.id !== id);
    setPets(petsUpdated);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form pets={pets} setPets={setPets} pet={pet} setPet={setPet} />
        <ListPet pets={pets} setPet={setPet} deletePet={deletePet} />
      </div>
    </div>
  );
}

export default App;
