
import Card from '../components/Card';

export default function Home({arr, cartItems, onChangeInput, searchValue, setSearchValue, onClickAddCart}) {
  return (
    <div className="main">

      {/* заголовок основного списка товаров */}
      <div className="main_header flex">
        <h1 className="main_title">{searchValue ? `Поиск по наименованию: ${searchValue}` : `Все товары`}</h1>
        <div className="search">
          <img className="search_img" src="/img/loupe.svg" alt="search-img"/>
          <input className="search_input" placeholder="Поиск..." onChange={onChangeInput} value={searchValue}/>
          {searchValue && <img className='search_clear' src='/img/close.svg' alt='img-clear' onClick={() => setSearchValue('')}/>}
        </div>
      </div>

      {/* основное содержимое - список товаров */}
      <div className="main_wrapper flex">            
        {arr
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => (
          <Card 
            key={item.name}
            id={item.id}
            title={item.name}
            price={item.price}
            img={item.img}
            onClickFavorite={() => console.log('добавили в закладки')}
            onClickAdd={(object) => onClickAddCart(object)}
            added={cartItems.some(object => object.id === item.id)}
            />
        ))}  
      </div>
    
    </div>
  )
}