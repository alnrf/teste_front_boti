import { combineReducers } from 'redux'

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, { cart: action.payload.cart }]
        default:
            return state
    }
}

const cardReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                {
                    number: action.payload.number,
                    name: action.payload.name,
                    dueDate: action.payload.dueDate,
                    name: action.payload.cvv,
                },
            ]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cart: cartReducer,
    card: cardReducer,
})

export default rootReducer
