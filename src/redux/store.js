import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});

// store'u oluşturup export et.
/** const store = createStore(rootReducer),
//  export default store ***** şeklinde de yapabilirdik. **/

// BURADA ŞUNU SÖYLEDİK. createStore BİR SONUÇ ÜRETECEK. NE ÜRETİRSE ÜRETSİN ONU VARSAYILAN(DEFAULT) OLARAK EXPORT ET. // SONRA MAIN.JSX DE STORE.JS DOSYASINDAN VARSAYILAN OLARAK İMPORT EDİLEN HER NE VARSA AL DEDİK.
// applyMiddleware fonksiyonu, bir ara yazılımı redux'a dahil etmeye yarar.
// thunk ara yazılımını store'a dahil et anlamında.
export default createStore(rootReducer, applyMiddleware(thunk));

