import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { FaFire } from "react-icons/fa";
import Card from "./Card";

function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!products) return <Loader />;
  if (products.length === 0) return <p>Restoran servis saartleri dışındadır</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaFire className="text-[#FA3051]" />
        Popüler
      </h2>

      <p className="text-gray-600">Restoranın en çok tercih edilen ürünleri</p>

      <div className="grid lg:grid-cols-2 gap-5 mt-4">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
