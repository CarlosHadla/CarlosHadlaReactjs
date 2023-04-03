import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemList } from "./components/ItemList/ItemList";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <ItemList />
    
    </div>
  );
}

export default App;
