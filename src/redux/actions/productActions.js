import axios from "axios";

// Aksiyon Oluşturan Fonksiyonlar
// (Obje Oluşturan Fonksiyon)
export const setLoading = () => {
  // --> yüklenme durumunda bir payload kullanmaya gerek duymadığımız için parametre aldırmadık bu fonksiyona.
  return {
    type: "SET_LOADING",
  };
};

export const setProduct = (payload) => {
  return {
    type: "SET_PRODUCT",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};


// Redux Thunk devreye girince Aksiyon Oluşturan Fonksiyonlar //
/*** Redux Thunk işin içine girince A.O.F, return satırında
    yeni bir fonksiyon döndürme yeteneğine sahip oluyor. Bu sayede
    return edilen fonksiyonların içinde api istekleri yapabiliriz. ***/
// return'ün parametresindeki dispatch, bizim gönderdiğimiz dispatch değil. bu redux thunk'tan gelen bir durum.

export const getData = ()=> {
  return (dispatch)=>{
    dispatch(setLoading())

    // artık aksiyon içinde api istekleri atabilir ve sonrasında store'a haber verebiliriz.
    axios.get("http://localhost:3040/products")
    .then((res)=> dispatch(setProduct(res.data)))
    .catch((err)=> dispatch(setError(err.message)))
  }
}


