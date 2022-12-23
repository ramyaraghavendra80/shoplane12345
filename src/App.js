// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Electronics from './components/Electronics/Electronics';                          
import Jewelery from './components/Jewelery/Jewelery';
import Mensclothing from './components/Men\'s clothing/Men\'s clothing';
import Womensclothing from './components/Women\'s clothing/Women\'s clothing';
import Home from './components/Home/Home/Home';
import ALL from './components/All/All';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Favourites from './components/Favourites/Favourites';
import Signup from '../src/components/Signup/Signup'
import Login from '../src/components/Login/Login'


function App() {


  const [favo,setFavorites] = useState([]);
    const [cartItem,setCartItem] = useState([]);

  function AddToCart(val){
       
    if(cartItem.includes(val)){
      cartItem.splice(cartItem.indexOf(val),1)
    }else{
      cartItem.push(val)
    }
    setCartItem([...cartItem])
    // console.log(cartItem)
    
}


function FavItem(params){
       
  if(favo.includes(params)){
    favo.splice(favo.indexOf(params),1)
  }else{
    favo.push(params)
  }
  setFavorites([...favo])
    console.log(favo)
  
  // setHeart(heart)
}

  return (
    <>
       <Home CartCount={cartItem.length} />
     

  <Routes>
      <Route path='/' element={ <ALL AddToCart={AddToCart} cartItem={cartItem} FavItem={FavItem} favo={favo}  /> }></Route>
      <Route path='/electronics' element={ <Electronics AddToCart={AddToCart} FavItem={FavItem} favo={favo} cartItem={cartItem} />}></Route>
      <Route path='/jewelery' element={ <Jewelery AddToCart={AddToCart} FavItem={FavItem} favo={favo} cartItem={cartItem}/>}></Route>
      <Route path='/menclothing' element={ <Mensclothing AddToCart={AddToCart} FavItem={FavItem} favo={favo} cartItem={cartItem}/>}></Route>
      <Route path='/womenclothing' element={ <Womensclothing AddToCart={AddToCart} FavItem={FavItem} favo={favo} cartItem={cartItem}/>}></Route>



      <Route path='/cart' element={ <Cart AddToCart={AddToCart} cartItem={cartItem} FavItem={FavItem} favo={favo}  />}></Route>
      <Route path='/favorites' element={ <Favourites AddToCart={AddToCart} cartItem={cartItem} FavItem={FavItem} favo={favo}  />}></Route>
      <Route path='/login' element={ <Login/>}></Route>
      <Route path='/signup' element={ <Signup/>}></Route>
      
  </Routes>
  
  </>
  );
}

export default App;
