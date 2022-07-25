import {createSelector} from 'reselect'

const selectCartReducer = (state) => state.cart

export const cartItemsSelector = createSelector(
    [selectCartReducer],
    (cartItemsSlice) => cartItemsSlice.cartItems
)
export const cartOpenSelector = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)
export const cartCountSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    ))

export const cartTotalSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
)