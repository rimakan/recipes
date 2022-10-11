import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrapper">
          <Header />
          <Router />
          <ToastContainer style={{ fontSize: "1.4rem" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
