import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Card({ restaurants }) {
  const { theme } = useSelector((store) => store.restaurantReducer);
  return (
    <Link
      to={`/restaurant/${restaurants.id}`}
      className={`relative shadow rounded-lg overflow-hidden hover:bg-[#efbac3] hover:shadow-lg cursor-pointer transition ${
        theme && "shadow-slate-100 "
      }`}
    >
      <span className="bg-[#FA3051] p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {restaurants.distance} km uzakta
      </span>
      <img
        src={restaurants.photo}
        className="w-full object-cover h-[250px] lg:h-[200px]"
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold">
            {restaurants.name}
          </h3>
          <p className="flex items-center gap-2 text-[#FA3051]">
            <FaStar />
            {restaurants.rating}
          </p>
        </div>
        <p className="text-sm my-3 text-gray-500">
          {restaurants.minPrice} ₺ minimum
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-[#FA3051]" />
            <span className="text-gray-600">
              {restaurants.estimatedDelivery} dak.
            </span>
          </p>

          {restaurants.isDeliveryFree && (
            <p className="flex gap-2 items-center font-semibold">
              <MdDeliveryDining className="text-[#FA3051]" />
              <span>Ücretsiz</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
