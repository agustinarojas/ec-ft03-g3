import { GET_PRODUCTS} from '../Constants/productsConstant.js'

const initialState = {
    products: []
   
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: 
        console.log(action + 'ACTIONS')
        return {
            ...state,
            products: [action.products]
        } 
        default: return {
            ...state
        }
    }

}
export default rootReducer