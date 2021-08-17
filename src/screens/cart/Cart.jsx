import React from 'react'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'
import OrderResume from '../../components/orderResume/OrderResume'
import './Cart.css'
import data from '../../utils/mock.json'
import Products from '../../components/products/Products'
import { useHistory } from 'react-router-dom'

const Cart = () => {
    const history = useHistory()
    const handleSubmit = () => {
        history.push('/pagamento')
    }

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
                <Button
                    text="Seguir para o pagamento"
                    action={() => handleSubmit()}
                />
            </MainCard>
        </div>
    )
}

export default Cart
