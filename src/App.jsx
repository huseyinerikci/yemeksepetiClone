import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Restaurant from "./pages/restautant";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/action/restActions";
import { getBasket } from "./redux/action/basketAction";

function App() {
  const { theme } = useSelector((store) => store.restaurantReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getBasket());
  }, []);
  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col ${
          theme && "bg-black text-white"
        }`}
      >
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
