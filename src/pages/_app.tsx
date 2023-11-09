import { AppProps } from "next/app";
import { Handbag, X } from 'phosphor-react'
import { globalStyles } from "../styles/global";
import { CartResume, Container, Counter, Header, ShowCart } from "../styles/pages/app";
import { Button } from "../components/Button";
import { useState } from "react";

// import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showCart, setShowCart] = useState('hide');

  function handlecToggleCart() {
    if (showCart == 'hide') {
      setShowCart('show')
    } else {
      setShowCart('hide')
    }
  }

  return (
    <Container>
        <Header>
          {/* <img src={logoImg} alt="" /> */}
          <span>😋</span>
          <div onClick={handlecToggleCart}>
            <a><Handbag size={28} color="#8D8D99"/></a>
            <Counter>5</Counter> 
          </div>
        </Header>
        <ShowCart className={showCart} >
          <div>
            <button className="close-button" onClick={handlecToggleCart}>
              <X size={32} weight="bold" color="#8d8d99" />
            </button>
            <h2>Cart Items</h2>
            <ul>
              <li>
                <img src="" alt="" />
                <div>
                  <p>Shirt Beyoung the Limits</p>
                  <strong>$ 50,00</strong>
                  <a>Remove</a>
                </div>
              </li>
            </ul>
          </div>
          <CartResume>
            <p>
              <span>Quantity</span>
              <span>3 items</span>
            </p>
            <p>
              <strong>Total price</strong>
              <strong>$ 200,00</strong>
            </p>
            <Button>Buy now</Button>
          </CartResume>
        </ShowCart>
        <Component {...pageProps} />
    </Container>
  )
}
