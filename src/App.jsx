import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./components/context/MyContext";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Provider>
    </div>
  );
};
export default App;
