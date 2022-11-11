
export default function Drawer({onClickClose, items = []}) {
  return (
    <div className="drawer_shadow">
    {/* <div className="drawer_shadow" style={{display: 'none'}}> */}
      <div className="drawer">
        <div className="flex">
          <h2 className="drawer_title">Корзина</h2>
          <img className="card_btn" src="/img/close.svg" alt="close-img" onClick={onClickClose}/>
        </div>   

        {/* товар в корзине */}
        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cart_item flex">
              <img className="cart_img" src={obj.img} alt="card-img"/>
              <div className="m-20">
                <p className="card_title">{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>           
              <img className="card_btn" src="/img/delete.svg" alt="delete-img"/>
            </div>
          ))}          
        </div>

        <div className="total">
          <ul>
            <li className="total_item flex">
              <span>Итого: </span>
              <div className="dashed m-20"></div>
              <b>1 000 руб.</b>
            </li>
            <li className="total_item flex">
              <span>Налог 5%: </span>
              <div className="dashed m-20"></div>
              <b>50 руб.</b>
            </li>            
          </ul>         
          <button className="total_btn flex">
            Оформить заказ
            <img src="/img/arrow-white.png" alt="arrow-img"/>
          </button>
        </div>           
      </div>
    </div>
  )
}