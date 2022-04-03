import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Payments from "./Pages/Payments/Payments";
import Requests from "./Pages/Requests/Requests";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Banner />

      <Routes>
        <Route path="/" element={<Requests />} />
        <Route path="services" element={<Services />} />
        <Route path="payments" element={<Payments />} />
      </Routes>
    </div>
  );
}

export default App;
