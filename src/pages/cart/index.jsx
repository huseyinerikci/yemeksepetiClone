import { useSelector } from "react-redux";
import cartReducer from "../../redux/reducers/cartReducer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import Card from "./Card";
import Warning from "./Warning";
import OrderBox from "./OrderBox";

function Cart() {
  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <div className="container">
      <h1 className=" text-2xl font-bold mb-5">SEPET</h1>
      <div className="grid md:grid-cols-[1fr_500px] gap-4 ">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} />
          ) : cart.length === 0 ? (
            <Warning />
          ) : (
            cart.map((i) => <Card key={i.id} product={i} />)
          )}
        </div>
        <OrderBox cart={cart} />
      </div>
    </div>
  );
}

export default Cart;
