import "./App.css";
import { ToasterProvider } from "./context/toasterContext";
import ShowCase from "./ShowCast";

function App() {
  return (
    <ToasterProvider>
      <div className="App">
        <ShowCase />
      </div>
    </ToasterProvider>
  );
}

export default App;
