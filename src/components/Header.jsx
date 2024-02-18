import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const store = useSelector((store)=> store.basket)

  // header'daki toplam miktarı hesapla, basketi kullanmamız gerektiği için abone olduk
  const total = store.basket.reduce((total,item)=> total + item.amount, 0)

  return (
    <header className="navbar bg-dark position-sticky top-0 z-3 shadow shadow-lg py-3 px-4">
      <div className="container-fluid">
        <Link to={"/"} className="fw-bold d-flex gap-2 align-items-center text-light">
          <img src="/vite.svg" alt="logo" />
          Redux Thunk
        </Link>

        <div className="d-flex gap-3">
            <NavLink to={"/"} className="text-light">Ana Sayfa</NavLink>
            <NavLink to={"/sepet"} className="text-light">
                <span>Sepet</span>
                <span className="badge bg-danger mx-2">{total}</span>
            </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
