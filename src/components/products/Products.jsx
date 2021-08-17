import React from 'react'
import './Products.css'
import numeral from '../../utils/numeral'

function Products({ data, route }) {
  return (
    <div className="product">
      <div className="product__header">
        <span>PRODUTOS</span>
      </div>
      <div className="product__container">
        {data.items.map((item, index) => (
          <div className="productCard" key={index}>
            <div className="productCard__container">
              <div className="productCard__detail">
                <div className="productCard__image">
                  <img src={item.product.imageObjects[0].thumbnail} alt="imagem" />
                </div>
                <div className="productCard__name">
                  <span>{item.product.name}</span>
                </div>
                {route === 'cart' && (
                  <div className="productCard__price">
                    <span>{numeral(item.product.priceSpecification.price).format()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
