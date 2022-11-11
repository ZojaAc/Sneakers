import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const arr = [
  {name: 'Летние кроссы', price: 1000, img: './img/images.jpg', id: 1},
  {name: 'Демисезонные кроссы', price: 2000, img: './img/images1.jpg', id: 2},
  {name: 'Просто кроссы', price: 500, img: './img/images2.jpg', id: 3},
  {name: 'Очень клевые кроссы', price: 5000, img: './img/images3.jpg', id: 4}
];

const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onClickAddCart = (object) => {
    if(cartItems.find((item) => item.id === object.id)) {
      setCartItems((prev) => prev.filter(item => item.id != object.id));
    } else {
      setCartItems((prev) => [...prev, object]);
    }
    // setCartItems([...cartItems, object]);
    // setCartItems(prev => [...prev, object]);
  }

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <AppContext.Provider value = {{ arr, cartItems }}>
      <div className="wrapper">
        {/* выплывающая справа корзина */}
        {cartOpened ? <Drawer items={cartItems} onClickClose={() => setCartOpened(false)}/> : null}     

        {/* шапка основной страницы */}
        <Header onClickCart={() => setCartOpened(true)} />
        <hr/>
        
        <Routes>          
          <Route path='/' element={<Home 
            arr={arr} 
            cartItems={cartItems}
            onChangeInput={onChangeInput}
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            onClickAddCart={onClickAddCart} />}>            
          </Route>
          <Route path='/favorites' element={<Favorites />}>            
          </Route>
        </Routes>        
      </div>
    </AppContext.Provider>     
  );
}

export default App;
