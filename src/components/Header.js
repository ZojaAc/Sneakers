import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header flex">
      {/* ссылка обратно на главную */}
      <Link to='/'>
        <div className="header_left flex">
          <img className="logo-img" src="/img/logo2.png" alt="logo-img" />
          <div>
            <h3 className="upp-case">Sneackers shop</h3>
            <p className="header_title">Магазин любимых кроссовок</p>
          </div>
        </div>    
      </Link>

      <ul className="header_right flex">
        <li className="header_cart" onClick={props.onClickCart}>
          <img className="header_img" src="/img/cart.svg" />
          <span className="m-20">0 руб.</span>
        </li>
        
        {/* ссылка на избранное */}
        <Link to='/favorites'>  
          <li className="header_favor m-20">          
            <img className="header_img" src="/img/favor.svg" />
          </li>
        </Link>  
        <li>
          <img className="header_img" src="/img/login.svg" />
        </li>
      </ul>
    </header>
  )
}