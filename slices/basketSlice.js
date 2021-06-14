import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],

};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // Actions
        addToBasket: (state, action )=> {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
                );
            let newBasket = [...state.items];

            if (index >= 0) {
             newBasket.splice(index, 1)
            }else {
                console.warn(
                    `Cant remove it (id: ${action.payload.id})`
                );
            }
            state.items = newBasket;
        },
    },
});


//This is exported so this can be used in any page imported this.
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selectors = This is how we pull nfromat f rom the Glbal store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=> total + item.price ,0)

export default basketSlice.reducer;