import { Link } from "react-router-dom";

function Warning() {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      Sepette henüz herhangi bir ürün bulunmamaktadır.
      <Link
        to={"/"}
        className=" p-2 shadow rounded text-white bg-[#f0657d] hover:bg-[#FA3051] transition"
      >
        Restoranlara Gözat
      </Link>
    </div>
  );
}

export default Warning;
