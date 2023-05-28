import { useState } from "react";
import { Header, Form, ListPet } from "./components";

function App() {
  const [patiens, setPatiens] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form patiens={patiens} setPatiens={setPatiens} />
        <ListPet patiens={patiens} />
      </div>
    </div>
  );
}

export default App;
