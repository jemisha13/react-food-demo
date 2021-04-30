import { Fragment, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

function App() {

  const [cartIsShown, setcartIsShown] = useState(false)
  const hideCartHandler = () => {
    setcartIsShown(false);
  }
  const showCartHandler = () => {
    setcartIsShown(true);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
     </Fragment>
  );
}

export default App;
