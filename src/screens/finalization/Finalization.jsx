import React, { useEffect, useState } from 'react'
import MainCard from '../../components/mainCard/MainCard'
import './Finalization.css'
import data from '../../utils/mock.json'
import Products from '../../components/products/Products'
import OrderResume from '../../components/orderResume/OrderResume'
import icon from '../../assets/icons/check_circle.svg'

const Finalization = () => {
    const [cardValues, setCardValues] = useState({})

    useEffect(() => {
        const card = JSON.parse(localStorage.getItem('@boti/card'))
        setCardValues(card)
        console.log('cards', card)
    }, [])

    useEffect(() => {}, [cardValues])
    return (
        <div>
            <MainCard route="finalization">
                <div className="finalization__success">
                    <div className="finalization_successIcon">
                        <img
                            className="finalization__icon"
                            src={icon}
                            alt="icon"
                        />
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
                        <span>7777</span>
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
