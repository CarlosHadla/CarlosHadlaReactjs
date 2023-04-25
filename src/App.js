import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetail/ItemDetailConteiner";

// function App() {

//   return (
//     <div className="App">

//       <Navbar />
//       <ItemListContainer/>

//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailConteiner/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
