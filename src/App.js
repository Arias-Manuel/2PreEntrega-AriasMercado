import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                bienvenidos={"Bienvenido a una tienda gamer"}
              />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
