import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../redux/action/basketAction";

function Card({ product }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };
  const handleDelete = () => {
    product.amount > 1
      ? dispatch(updateItem(product.id, product.amount - 1))
      : dispatch(removeItem(product.id));
  };
  return (
    <div className="flex p-4 gap-4 border mb-10 rounded">
      <img src={product.photo} className="size-[100px] rounded-lg" />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-[#FA3051]">
          {product.title}
        </h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}₺</p>
          <div className="flex items-center border text-xl rounded-lg">
            <button onClick={handleDelete} className="basket-btn">
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <p className="min-w-[30px] text-center">{product.amount}</p>
            <button className="basket-btn">
              <FaPlus onClick={handleIncrease} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
