import { useState } from "react";
import { Header, Form, ListPet } from "./components";

function App() {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState({});
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form pets={pets} setPets={setPets} pet={pet} />
        <ListPet pets={pets} setPet={setPet} />
      </div>
    </div>
  );
}

export default App;
