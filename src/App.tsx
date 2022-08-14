import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import { AppRouter } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
