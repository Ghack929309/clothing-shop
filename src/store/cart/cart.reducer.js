import {CART_ACTION_TYPES} from "./cart.types";


const CART_INITIAL_STATE={
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (state=CART_INITIAL_STATE,action={})=>{
    const {type,payload} = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return state={...state,cartItems:payload};
        case CART_ACTION_TYPES.SET_IS_OPEN:
            return state={...state,isCartOpen: payload}
        default:
            return state
    }
}