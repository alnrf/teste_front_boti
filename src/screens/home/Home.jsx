import React from 'react'
import Button from '../../components/button/Button'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__button">
          <a href="/carrinho">
            <Button text="carrinho" />
          </a>
          <a href="/pagamento">
            <Button text="Pagamento" />
          </a>
          <a href="/finalizacao">
            <Button text="Finalização" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
