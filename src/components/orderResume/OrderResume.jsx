import React from 'react'
import './OrderResume.css'

function OrderResume({ products, shipping, discount, total }) {
  return (
    <div className="resume">
      <div className="resume__container">
        <div className="prices__row">
          <span className="resume__product">PRODUTOS</span>
          <span className="resume__product">{products}</span>
        </div>
        <div className="prices__row">
          <span className="resume__shipping">FRETE</span>
          <span className="resume__shipping">{shipping}</span>
        </div>
        <div className="prices__row">
          <span className="resume__discount">DESCONTOS</span>
          <span className="resume__discount">{discount}</span>
        </div>
        <div className="total__row">
          <span className="resume__total">TOTAL</span>
          <span className="resume__total">{total}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderResume
