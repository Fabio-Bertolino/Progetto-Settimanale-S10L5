import "./App.css";
import MyNav from "./components/MyNav";
// import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <div className="rainy">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location-details/:id" element={<WeatherDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <MyFooter /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
