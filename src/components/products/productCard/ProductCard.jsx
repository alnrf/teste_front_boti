import React from 'react'
import './ProductCard.css'
import numeral from '../../../utils/numeral'

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productCard__container">
        <div className="productCard__image">
          <img src={product?.items[0].product.imageObjects.thumbnail} />
        </div>
        <div className="productCard__name">
          <span>{product?.items[0].product.name} </span>
        </div>
        <div className="productCard__price">
          <span>{product?.items[0].product.priceSpecification.price} </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
