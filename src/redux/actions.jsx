function addCard(card) {
    return {
        type: 'ADD_CARD',
        payload: {
            number: card.number,
            name: card.name,
            dueDate: card.dueDate,
            cvv: card.cvv,
        },
    }
}

export { addCard }

function addCart(cart) {
    return {
        type: 'ADD_CART',
        payload: { cart: cart.cart },
    }
}

export { addCart }
