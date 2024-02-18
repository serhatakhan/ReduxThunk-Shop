const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, basket: state.basket.concat(action.payload) };

    case "SET_BASKET_LOADING":
      return {...state, isLoading: true}

    case "SET_BASKET_ERROR":
      return {...state, isLoading:false, isError: action.payload}

    case "SET_BASKET_DATA":
      return {...state, isLoading: false, isError: false, basket: action.payload}

    //ad'sini bildiğimiz ürünün miktarını 1 arttıracak yani dizideki bir elemanın miktarı 1 artacak
    //bunun için map() veya splice() kullanabiiriz. burada "clone yöntemi" kullanarak devam ettik. map ile önceden yapmıştık. map ile yapmak daha kolay.
    case "UPDATE":
      //1) önce değiştirilecek dizinin kopyasını oluştur, nesne içerisinde dağıtarak yapılır kopyası. dizi olduğuiçin [] olmalı
      const cloneBasket = [...state.basket]  

      //2) güncellenecek elemanın dizideki sırasını bul
      //id'si bilinen elemanın dizideki sırası findIndex ile bulunur. find olmaz çünkü find, sırasını bulmaya yaramaz. elemanın tüm bilgilerini almaya yarar.
      const foundId = cloneBasket.findIndex((item)=> item.id === action.payload)

      //3) elemanın miktarını 1 arttır
      cloneBasket[foundId].amount ++

      // ALTERNATİF splice() ÇÖZÜMÜ:
      /* --> splice bize kaçıncı elemandan silinmeye başlayacağını, kaç tane eleman sileceğini ve sildiğinin yerine ne koyacağını soruyor. foundId'den başlasın 1 tane silsin. sildiğinin yerine de o elemanın tüm bilgilerine sahip ama miktarı 1 fazlası olanı koy. YANİ NE ÇIKACAK? ÇIKANIN YERİNE NE GİRECEK?
      cloneBasket.splice(foundId, 1, {...cloneBasket[foundId], amount: cloneBasket[foundId].amount + 1)
      */

      return {...state, basket: cloneBasket}
      /* niye direk state.basket yapmadık da kopyasını oluşturduk? 
      eğer öyle yaparsak doğrudan tuttuğumuz state'i güncellemeye çalışmız oluruz.
      ve redux bizden bunu istemiyor. redux doğrudan güncellemeye izin vermiyor o yüzden kopyasını oluşturduk, güncellenecekse hep return satırını kullan diyor. */

    case "DELETE":
      const filtred = state.basket.filter((i)=> i.id !== action.payload)
      return {...state, basket: filtred}

    default:
      return state;
  }
};

export default basketReducer;
