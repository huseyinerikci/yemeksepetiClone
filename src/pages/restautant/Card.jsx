import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/action/basketAction";

function Card({ product }) {
  const { cart } = useSelector((store) => store.cartReducer);
  const { theme } = useSelector((store) => store.restaurantReducer);
  const dispatch = useDispatch();

  const found = cart?.find((cartItem) => cartItem.id === product.id);
  const handleAdd = () => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(createItem(product));
  };
  return (
    <div className="grid grid-cols-[1fr_115px] border shadow gap-3 rounded-lg p-3 hover:bg-[#efbac3] hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl fw-semibold">{product.title}</h1>
          <p className="text-gray-500 my-1">{product.desc}</p>
        </div>
        <p className="text-lg font-semibold">{product.price}₺</p>
      </div>
      <div className="relative">
        <img
          src={product.photo}
          className="rounded-md object-cover size-full"
        />

        <button
          onClick={handleAdd}
          className={`absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center font-bold ${
            theme && "bg-black text-white hover:bg-[#efbac3] hover:text-black"
          }`}
        >
          {found ? found.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
}

export default Card;
