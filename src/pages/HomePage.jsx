import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getData } from "../redux/actions/productActions";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const HomePage = () => {
  // store'a abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // sadece 1 aksiyon çalıştıracağız ve
    // bu aksiyon api isteğini de arka planda yapacak.
    dispatch(getData());

    // sepetteki verileri al, header için lazım
    dispatch(getBasket())
  }, []);

  return (
    <div className="container">
      {/* veriler yükleniyorsa loader bas */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana isError içindeki hata mesajını bas */}
      {store.isError && (
        <h1 className="text-center my-5 text-white">{store.isError}</h1>
      )}

      {/* veriler geldiyse ekrana bas */}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {store?.products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
