import React from 'react';
import styles from './Card.scss';

export default function Card({ img, title, price, onClickFavorite, onClickAdd, added=false }) {
  const [isAdded, setIsAdded] = React.useState(added);

  const onClickPlus = () => {
    onClickAdd({img, title, price});  //  добавить в корзину
    setIsAdded(!isAdded);  //  поменять картинку
  }

  // React.useEffect(() => {
  //   console.log('переменная изменилась')
  // }, [isAdded]); 
 
  return (
    <div className="card">
      <button className='card_btn-fav' onClick={onClickFavorite}>
        <img className="card_btn card_btn-like" src="/img/like.svg" alt="like-img"/>
      </button>      
      {/* <img className="card_img" src="/img/images.jpg" alt="card-img"/> */}
      <img className="card_img" src={img} alt="card-img"/>
      {/* <p className="card_title">летние кроссовки</p> */}
      <p className="card_title">{title}</p>
      <div className="flex">
        <div>
          <p className="card_price-title upp-case">цена: </p>
          <b>{price} руб.</b>
        </div>
        {/* <button className='card_btn-add' onClick={() => onClickButton()}> */}
        <button className='card_btn-add' onClick={onClickPlus}>
          <img className="card_btn" src={isAdded ? "/img/added.png" : "/img/add.svg"} alt="add-img"/>
        </button>
        
      </div>
    </div>
  )
}
