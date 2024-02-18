// api'den ürün verilerini al ve
// yüklenme durumununu, hata durumunu
// ve gelen verileri store'da saklayacağız
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setProduct } from "../redux/actions/productActions";
import Loader from "../components/Loader";

const MainPage = () => {
  const dispatch = useDispatch();

  // store'a abone ol
  const store = useSelector((store) => store.products);
  console.log(store);

  useEffect(() => {
    // 1) isteğin başladığını store'a bildir --> bir bilgiyi store'a aktarmak istiyorsak her zaman ilk adım dispatch işlemidir
    // * NEDEN BUNU STORE'A AKTARMA İHTİYACI DUYDUK?
    //-->YÜKLENME DURUMUNUN BİLGİSİNİ 'BİRDEN FAZLA BİLEŞENDE KULLANACAKSAK STORE'A AKTARIRIZ.' BİZİM DE ŞU AN BİRDEN FAZLA YERDE KULLANMA PLANIMIZ VAR. ONDAN DOLAYI.
    dispatch(setLoading());

    axios
      .get("http://localhost:3040/products")
      // 2) isteğin başarılı olduğunu store'a bildir. --> yine bilgiyi store'a aktarmak (ürünleri store'a aktarmak istiyoruz.) için dispatch
      .then((res) => dispatch(setProduct(res.data)))
      // 3) isteğin başarısız olduğunu store'a bildir. --> yine bilgiyi store'a aktarmak için dispatch. hata mesajını store'a aktardık
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div className="container p-5">
      {/* veriler yükleniyorsa loader bas */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana isError içindeki hata mesajını bas */}
      {store.isError && (
        <h1 className="text-center my-5 text-white">{store.isError}</h1>)}

      {/* veriler geldiyse ekrana bas */}
      {store?.products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MainPage;
