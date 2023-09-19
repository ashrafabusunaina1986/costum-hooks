import React, { createContext, useReducer } from 'react'

export const Cart_Context = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

const defaultCarts = {
    items: [],
    totalAmount: 0
}
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existCartItem = state.items[existCartItemIndex]

        let updatedItems
        if (existCartItem) {
            const updateItem = {
                ...existCartItem,
                amount: existCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existCartItemIndex] = updateItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: Number(updateTotalAmount.toFixed(2))
        }
    }
    if (action.type === 'REMOVE') {
        const indRemove=state.items.findIndex(item => item.id === action.id)
        const itemRemoved = state.items[indRemove]
        let totalAmountRemove,updatedItems
        totalAmountRemove = (state.totalAmount -
            itemRemoved.price).toFixed(2) 
        
        if(itemRemoved.amount===1){
             updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updateItem={...itemRemoved,amount:itemRemoved.amount-1}
            updatedItems=[...state.items]
            updatedItems[indRemove]=updateItem
        }
        
        return {
            items: updatedItems,
            totalAmount: Number(totalAmountRemove)
        }
    }
    return defaultCarts
}

const CartContex = ({ children }) => {
    const [cartsState, dispatchCartAction] = useReducer(CartReducer, defaultCarts)

    const addItem = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItem = id => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const cartObject = {
        items: cartsState.items,
        totalAmount: cartsState.totalAmount,
        addItem: addItem,
        removeItem: removeItem
    }

    return (
        <Cart_Context.Provider value={cartObject}>
            {children}
        </Cart_Context.Provider>
    )
}

export default CartContex