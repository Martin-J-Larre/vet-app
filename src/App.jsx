import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ListPet } from "./components/ListPet";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ListPet />
      </div>
    </div>
  );
}

export default App;
