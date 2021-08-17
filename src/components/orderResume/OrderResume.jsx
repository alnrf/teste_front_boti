import React from 'react'
import './OrderResume.css'
import numeral from '../../utils/numeral'

function OrderResume({ products, shipping, discount, total }) {
  return (
    <div className="resume">
      <div className="resume__container">
        <div className="prices__row">
          <span className="resume__product">PRODUTOS</span>
          <span className="resume__product">{numeral(products).format()}</span>
        </div>
        <div className="prices__row">
          <span className="resume__shipping">FRETE</span>
          <span className="resume__shipping">{numeral(shipping).format()}</span>
        </div>
        <div className="prices__row">
          <span className="resume__discount">DESCONTO</span>
          <span className="resume__discount">- {numeral(discount).format()}</span>
        </div>
        <div className="total__row">
          <span className="resume__total">TOTAL</span>
          <span className="resume__total">{numeral(total).format()}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderResume
