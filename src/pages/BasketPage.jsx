import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../redux/actions/basketActions";
import Loader from "../components/Loader";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.basket);

  // api'den sepete eklenen ürünleri al ve store'a aktar(bunun için de bir asenkron aksiyon -thunk- yazabiliriz.)
  useEffect(() => {
    dispatch(getBasket());
  }, []);

  // toplam tutarı hesapla
  const total = store.basket.reduce((total,item)=> total + (item.amount * item.price), 0)

  return (
    <div className="container p-5">
      <div className="row gap-4">
        <div className="col-md-8 mx-auto">
          {store.isLoading && <Loader />}

          {store.isError && <h3>{store.isError}</h3>}

          {store.basket.map((product) => (
            <BasketItem key={product.id} product={product} />
          ))}
        </div>

        <div className="col-md-8 mx-auto">
          <div className="bg-white p-5 rounded-2 text-black w-100 shadow">
            <h5 className="text-center">Toplam Tutar: {total}₺</h5>
            <button className="w-100 my-2">Alışverişi Tamamla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
