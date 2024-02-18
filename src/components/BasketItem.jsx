import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../redux/actions/basketActions";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded p-3 bg-white d-flex justify-content-between text-black mb-3 shadow">
      <div className="d-flex gap-3 align-items-center">
        <img className="rounded" width={66} height={66} src={product.image} />
        <h4 className="d-flex align-items-center">
          <span className="me-3 fw-bold">{product.make}</span>
          <span className="text-secondary fs-5">{product.model}</span>
        </h4>
        <h4 className="text-danger fs-5">{product.price} ₺</h4>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div>Miktar: {product.amount}</div>
        <div>
          <button onClick={() => dispatch(updateItem(product))}
            className="btn btn-sm btn-primary">+</button>
          <button onClick={()=> dispatch(removeItem(product.id))} className="btn btn-sm btn-danger mx-1">-</button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
