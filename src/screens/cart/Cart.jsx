import React from 'react'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'
import OrderResume from '../../components/orderResume/OrderResume'
import './Cart.css'

function Cart() {
  return (
    <div>
      <MainCard route="cart">
        <OrderResume discount="1" products="1" shipping="1" total="1" />
        <Button text="Seguir para o pagamento" />
      </MainCard>
    </div>
  )
}

export default Cart
