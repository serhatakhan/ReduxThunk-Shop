import axios from "axios"

// Asenkron Aksiyon(Thunk Aksiyon yani)

// Sepete yeni ürün ekleme işini yapacak.
// Önce api'ye post isteği ile elemanı ekleyecek ardından
// api'ye eklenirse store'a da eklenecek.

//! return satırını ve süslü parantezleri silebiliriz. Arrow Fonk. özelliğidir
// İlk okun devamında süslü parantez olmadığı için aradaki return'e gerek kalmıyor.
export const addToBasket = (product)=> async (dispatch)=>{
    // 1) yeni bir nesne oluşturup miktarını 1 olarak belirle
    const newProduct = {...product, amount: 1}
    
    // 2) nesneden gereksiz değerleri kaldır
    delete newProduct.specs
    delete newProduct.color
    delete newProduct.title
    delete newProduct.stockAmount
    
    // 3) ürünü api'ye kaydet
    const res = await axios.post("http://localhost:3040/basket", newProduct)

    // 4) store'a yeni ürünü ekle
        dispatch({
            type: "ADD",
            payload: newProduct
        })
    }



//api'den sepet verilerini alıp aşama aşama (yüklenme, başarılı olma ve hata)
//store'u bilgilendiren asenkron bir thunk aksiyonu
export const getBasket = () => (dispatch)=> {
    dispatch({
        type: "SET_BASKET_LOADING"
    })

    axios.get("http://localhost:3040/basket")
    .then((res)=> dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data
    }))
    .catch((err)=> dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message
    }))
}


// sepette var olan ürünün miktarını 1 arttır
export const updateItem = (product)=> (dispatch)=>{
    //ürünün sadece miktar değerini değiştirmek istiyoruz. önce API'yi güncelle.
    //virgülden sonraki kısım neyi güncelleyeceğiz? amount'u güncelleyeceğiz. yani şu an ki miktarın 1 fazlasına eşitledik
    axios.patch(`http://localhost:3040/basket/${product.id}`, {amount: product.amount + 1})
    //istek başarılı olursa reducer'a haber ver.
    .then(()=> dispatch({
        type: "UPDATE",
        payload: product.id
    }))
}


// ürünü sepetten kaldırır
export const removeItem = (delete_id) => (dispatch)=>{
    axios.delete(`http://localhost:3040/basket/${delete_id}`)
    // işlem başarılı olursa reducer'a haber ver
    .then(()=> dispatch({
        type: "DELETE",
        payload: delete_id
    }))
}
