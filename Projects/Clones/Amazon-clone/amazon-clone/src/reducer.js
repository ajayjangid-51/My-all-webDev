export const initialState = {
    basket: [],
    user: null,
};

// yeh upar apnne initialState naam se ek Array-container banaya hai as bcoz yaha apnne {} use kiye hai.

const reducerfn = (state, action) => {
    // and arrow-fn meh return value eskimeh likhi jati hai..
    console.log(action);
    // as yaha pe voh dispatch as a action meh pass ho rha hai. and voh initialState as a state meh pass ho rha hai.
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // here we will logic mtlb ek tarike jisse apn basket meh product-items ko add kr skee.
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
            // break;
        case 'REMOVE_FROM_BASKET':
            // ek logic ya tarika jisseh apn products_items ko basket se remove kr ske.

            // we cloned the basket
            let newBasket = [...state.basket];
            
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                // it means items exists in the basket
                newBasket.splice(index, 1);
            } else{
                console.warn(`cant remove product (id: ${action.id}) as its `);
            }
            return {...state , basket: newBasket };

            // break;
        default:
            return state;
            // mtlb it will return the state of the basket.
            
    }
}

export default reducerfn;
// toh now yeh krke apn ess function ko outside kisi bhi jagah use kr skteh hai.