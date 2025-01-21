import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<Game>) => {
      state.items = state.items.filter(
        (product) => product.id != action.payload.id
      )
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
