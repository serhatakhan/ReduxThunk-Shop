# ReduxThunk Store

Bu proje, Redux ve Redux Thunk kütüphanelerini kullanarak yönetilen bir React online mağaza uygulamasıdır. Redux, uygulama genelindeki durumu yönetmek için kullanılan bir durum yönetim kütüphanesi iken Redux Thunk ise Redux eylemlerini yürütmek için kullanılan bir orta katman (middleware) kütüphanesidir. 

**Redux Thunk**, asenkron eylemleri (örneğin, bir API isteğini işlemek) Redux eylemlerinin içinde kullanmamızı sağlar. Proje, Redux Thunk'ı kullanarak asenkron veri alışverişini anlama ve yönetme amacıyla oluşturulmuştur.

## Proje Yapısı

Proje, iki farklı Redux reducer'ını içermektedir:

**`1. Product Reducer:`**
productReducer.js dosyasında yer alan bu reducer, ürünlerle ilgili durumu yönetir. Başlangıç durumu, isLoading, isError ve products alanlarını içeren bir nesnedir. Bu reducer, SET_LOADING, SET_ERROR ve SET_PRODUCT gibi eylemleri işler.

**`2. Basket Reducer:`**
basketReducer.js dosyasında yer alan bu reducer, sepetle ilgili durumu yönetir. Başlangıç durumu, isLoading, isError ve basket alanlarını içeren bir nesnedir. Bu reducer, ADD, SET_BASKET_LOADING, SET_BASKET_ERROR, SET_BASKET_DATA, UPDATE ve DELETE gibi eylemleri işler.

## Kullanılan Teknolojiler

* React
* Redux
* Redux Thunk
* React Router DOM
* Axios
* JSON-SERVER
* Bootstrap

## Ekran Gifi

