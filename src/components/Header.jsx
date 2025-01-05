import { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeToggle } from "../redux/action/restActions";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

function Header() {
  const dispatch = useDispatch();
  const { restaurants, theme } = useSelector(
    (store) => store.restaurantReducer
  );
  const { cart } = useSelector((store) => store.cartReducer);
  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className={`shadow ${theme && "shadow-white"}`}>
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className=" font-sans text-[#FA3051] font-[900] text-2xl  md:text-3xl"
        >
          Yemeksepeti
        </Link>
        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda {restaurants.length}
            <IoRestaurant
              className="text-[#FA3051]
            "
            />
            <span className="max-md:hidden">Restoran var</span>
          </Link>

          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link
            to="/cart"
            className=" flex items-center gap-2 py-2 px-3 hover:bg-[#efbac3] transition rounded-full"
          >
            <BsBasket />
            <span>{totalAmount}</span>
          </Link>
          <button
            onClick={() => dispatch(changeToggle(!theme))}
            className="px-3 rounded-full hover:bg-[#efbac3]"
          >
            {theme ? <MdWbSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
