import React, { useEffect } from 'react'
import Button from '../../components/button/Button'
import './Home.css'

function Home() {
    useEffect(() => {
        fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
            .then((response) => response.json())
            .then((data) =>
                localStorage.setItem('@svg/cart', JSON.stringify(data))
            )
    }, [])

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__button">
                    <a href="/carrinho">
                        <Button text="carrinho" />
                    </a>
                    <a href="/pagamento">
                        <Button text="Pagamento" />
                    </a>
                    <a href="/finalizacao">
                        <Button text="Finalização" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
