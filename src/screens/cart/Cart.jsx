import React from 'react'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'
import OrderResume from '../../components/orderResume/OrderResume'
import './Cart.css'
import data from '../../utils/mocky.json'
import Products from '../../components/products/Products'

const Cart = () => {
  return (
    <div>
      <MainCard route="cart">
        <Products data={data} route="cart" />
        <OrderResume
          discount={data.discount}
          products={data.subTotal}
          shipping={data.shippingTotal}
          total={data.total}
        />
        <Button text="Seguir para o pagamento" />
      </MainCard>
    </div>
  )
}

export default Cart
