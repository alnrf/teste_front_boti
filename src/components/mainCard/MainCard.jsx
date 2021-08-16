import React from 'react'
import OrderResume from '../orderResume/OrderResume'
import './MainCard.css'

function MainCard({ route, children }) {
  return (
    <div className="mainCard">
      <div className="mainCard__container">
        <div className="mainCard__header">
          <span
            className={`${
              route === 'cart' ? 'mainCard__header__title_actv' : 'mainCard__header__title'
            }`}
          >
            CARRINHO
          </span>
          <span
            className={`${
              route === 'payment' ? 'mainCard__header__title_actv' : 'mainCard__header__title'
            }`}
          >
            PAGAMENTO
          </span>
          <span
            className={`${
              route === 'finalization' ? 'mainCard__header__title_actv' : 'mainCard__header__title'
            }`}
          >
            CONFIRMAÇÃO
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default MainCard
