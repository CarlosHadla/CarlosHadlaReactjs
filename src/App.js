
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemList } from "./components/ItemList/ItemList";

function App() {

  let greeting = "Este es un saludo." 

  return (
    <div className="App">
      
      <Navbar />
      <ItemList greeting={greeting}/>
    
    </div>
  );
}

export default App;
