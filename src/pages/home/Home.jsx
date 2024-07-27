import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input,setInput] = useState('');

  const inputHandler = (event)=>{
   setInput(event.target.value);
   if(event.target.value === ""){
    setDisplayCoin(allCoin);
   }
  }
  
  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1>Reliable <br /> Crypto Marketplace</h1>
        <p>Welcome to the most reliable crypotcurrency marketplace. Sign up to explore more about cryptocurrency</p>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder='Search Crypto..' list='coinList' value={input} onChange={inputHandler} required/>

         <datalist id='coinList'>
          {allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}
         </datalist>


          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>

              <p>{item.market_cap_rank}</p>
               <div>
              <div><img src={item.image} alt="" /></div>
              <p>{item.name + " - " + item.symbol}</p>
            </div>
             <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
             <p className={item.price_change_percentage_24h>0?"green":"red"}>
              {Math.floor(item.price_change_percentage_24h*100)/100}
              </p>
             <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
             </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home;


