import React, { useState } from 'react'
import Button from '../../components/button/Button'
import { addCard } from '../../redux/actions'
import MainCard from '../../components/mainCard/MainCard'
import OrderResume from '../../components/orderResume/OrderResume'
import './Payment.css'
import data from '../../utils/mock.json'
import InputMask from 'react-input-mask'
import { useHistory } from 'react-router-dom'

function Payment() {
    const history = useHistory()

    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardDueDate, setcardDueDate] = useState('')
    const [cardCvv, setCardCvv] = useState('')
    const [cardNumberError, setCardNumberError] = useState(false)
    const [cardNameError, setCardNameError] = useState(false)
    const [cardDueDateError, setCardDueDateError] = useState(false)
    const [cardCvvErros, setCardCvvError] = useState(false)

    const handleChangeNumber = () => (event) => {
        setCardNumber(event.target.value)
    }
    const handleChangeName = () => (event) => {
        setCardName(event.target.value)
    }
    const handleChangeDueDate = () => (event) => {
        setcardDueDate(event.target.value)
    }
    const handleChangeCVV = () => (event) => {
        setCardCvv(event.target.value)
    }

    const handleSubmit = () => {
        localStorage.setItem(
            '@boti/card',
            JSON.stringify({
                number: cardNumber,
                name: cardName,
                dueDate: cardDueDate,
                cvv: cardCvv,
            })
        )
        history.push('/finalizacao')
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
                            <div className="payment__cardLabel">
                                Número do cartão
                            </div>
                            <div className="payment__input">
                                <InputMask
                                    mask="9999.9999.9999.9999"
                                    inputMode="numeric"
                                    className="payment__inputText"
                                    value={cardNumber}
                                    onChange={handleChangeNumber()}
                                />
                            </div>
                        </div>
                        <div className="payment__cardName">
                            <div className="payment__cardLabel">
                                Nome do Titular
                            </div>
                            <div className="payment__input">
                                <input
                                    className="payment__inputText"
                                    value={cardName}
                                    placeholder="Como no cartão"
                                    onChange={handleChangeName()}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="payment__cardDueDateAndCVV">
                            <div className="payment__cardDueDate">
                                <div className="payment__cardLabel">
                                    Validade (mês/ano)
                                </div>
                                <div className="payment__input">
                                    <InputMask
                                        mask="99/9999"
                                        inputMode="numeric"
                                        className="payment__inputText"
                                        value={cardDueDate}
                                        onChange={handleChangeDueDate()}
                                    />
                                </div>
                            </div>
                            <div className="payment__cardCVV">
                                <div className="payment__cardLabel">CVV</div>
                                <div className="payment__input">
                                    <input
                                        className="payment__inputText"
                                        value={cardCvv}
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
                <Button
                    text="FINALIZAR O PEDIDO"
                    action={() => handleSubmit()}
                />
            </MainCard>
        </div>
    )
}

export default Payment
