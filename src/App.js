import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import { AppRouter } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
