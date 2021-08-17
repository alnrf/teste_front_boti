import React from 'react'
import MainCard from '../../components/mainCard/MainCard'
import './Finalization.css'
import data from '../../utils/mocky.json'
import Products from '../../components/products/Products'
import OrderResume from '../../components/orderResume/OrderResume'
import icon from '../../assets/icons/check_circle.svg'

const Finalization = () => {
  return (
    <div>
      <MainCard route="finalization">
        <div className="finalization__success">
          <div className="finalization_successIcon">
            <img classname="finalization__icon" src={icon} alt="icon" />
          </div>
          <div className="finalization__successText">
            <span>COMPRA EFETUADA COM SUCESSO</span>
          </div>
        </div>
        <div className="payment">
          <div className="payment__header">
            <span>PAGAMENTO</span>
          </div>
          <div className="payment__container">
            <span>****.****.****.8787</span>
            <span>NOME COMPLETO</span>
            <span>12/2021</span>
          </div>
        </div>
        <Products data={data} />
        <OrderResume
          discount={data.discount}
          products={data.subTotal}
          shipping={data.shippingTotal}
          total={data.total}
        />
      </MainCard>
    </div>
  )
}

export default Finalization
