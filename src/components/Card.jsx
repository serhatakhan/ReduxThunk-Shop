import { useDispatch, useSelector } from "react-redux"
import { addToBasket, updateItem } from "../redux/actions/basketActions"

const Card = ( {product} ) => {
  const store = useSelector((store)=> store.basket)
  const dispatch = useDispatch()

  // sepete abone ol ve sepette bu elemandan varsa onu bul
  const found = store.basket.find((i)=> i.id === product.id)

  console.log(store)

  const handleClick = () =>{
    if(found){
        // onun miktarını güncellemeye yarayan updateItem'ı çalıştır. bu aksiyona bulduğum elemanın bilgilerini gönder
        dispatch(updateItem(found))
    } else{
        //eleman sepette yoksa sepete eklemeye yarayan addToBasket'ı çalıştır.
        dispatch(addToBasket(product))
    }
  }

  return (
    <div className="card p-3 shadow" style={{width: "16rem"}}>
        <div className="d-flex justify-content-center">
            <img width={220} height={220} className="rounded-3" src={product.image} alt={product.title} />
        </div>

        <div className="card-body">
            <h5 className="card-title fw-bold fs-3 text-truncate">{product.title}</h5>
            <p>
                <span className="fw-bold me-2">{product.make}</span>
                <span className="text-secondary">{product.model}</span>
            </p>

            <p className="d-flex flex-column mb-4">
                {product.specs.map((spec,i)=> (
                    <span key={i}>{spec}</span>
                ))}
            </p>

            <button onClick={handleClick} className="w-100 btn btn-dark">
                {found ? `Miktarı Arttır (${found.amount})` : "Sepete Ekle"}
            </button>
        </div>
    </div>
  )
}

export default Card