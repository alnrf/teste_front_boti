import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'
import OrderResume from '../../components/orderResume/OrderResume'
import './Payment.css'
import data from '../../utils/mocky.json'
import InputMask from 'react-input-mask'

function Payment() {
  const [cardValues, setCardValues] = useState({
    number: '',
    name: '',
    dueDate: '',
    cvv: '',
    numberError: false,
    nameError: false,
    dueDateError: false,
    cvvErros: false
  })

  const handleChangeNumber = () => (event) => {
    setCardValues({ ...cardValues, number: event.target.value })
  }
  const handleChangeName = () => (event) => {
    setCardValues({ ...cardValues, name: event.target.value })
  }
  const handleChangeDueDate = () => (event) => {
    setCardValues({ ...cardValues, dueDate: event.target.value })
  }
  const handleChangeCVV = () => (event) => {
    setCardValues({ ...cardValues, cvv: event.target.value })
  }

  return (
    <div>
      <MainCard route="payment">
        <div className="payment">
          <div className="payment__header">
            <span>CARTÃO DE CRÉDITO</span>
          </div>
          <div className="payment__container">
            <div className="payment__cardNumber">
              <div className="payment__cardLabel">Número do cartão</div>
              <div className="payment__input">
                <InputMask
                  mask="9999.9999.9999.9999"
                  inputMode="numeric"
                  className="payment__inputText"
                  value={cardValues.number}
                  onChange={handleChangeNumber()}
                />
              </div>
            </div>
            <div className="payment__cardName">
              <div className="payment__cardLabel">Nome do Titular</div>
              <div className="payment__input">
                <input
                  className="payment__inputText"
                  value={cardValues.name}
                  placeholder="Como no cartão"
                  onChange={handleChangeName()}
                  type="text"
                />
              </div>
            </div>
            <div className="payment__cardDueDateAndCVV">
              <div className="payment__cardDueDate">
                <div className="payment__cardLabel">Validade (mês/ano)</div>
                <div className="payment__input">
                  <InputMask
                    mask="99/9999"
                    inputMode="numeric"
                    className="payment__inputText"
                    value={cardValues.dueDate}
                    onChange={handleChangeDueDate()}
                  />
                </div>
              </div>
              <div className="payment__cardCVV">
                <div className="payment__cardLabel">CVV</div>
                <div className="payment__input">
                  <input
                    className="payment__inputText"
                    value={cardValues.cvv}
                    onChange={handleChangeCVV()}
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <OrderResume
          discount={data.discount}
          products={data.subTotal}
          shipping={data.shippingTotal}
          total={data.total}
        />
        <Button text="Finalizar o pedido" />
      </MainCard>
    </div>
  )
}

export default Payment
