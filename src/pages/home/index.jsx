import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../redux/action/restActions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";

function Home() {
  const { isLoading, error, restaurants, theme } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  const retry = () => dispatch(getRestaurants());
  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5">
        Yakınınızdaki Restoranlar
      </h1>
      <hr className={"border-transparent"} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {restaurants.map((i) => (
            <Card key={i.id} restaurants={i}></Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
