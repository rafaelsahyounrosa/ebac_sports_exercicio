import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      const produtoExistente = state.itens.find((fav) => fav.id === favorito.id)

      if (produtoExistente) {
        state.itens = state.itens.filter((f) => f.id !== favorito.id)
        console.log(state.itens)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionar } = favoritosSlice.actions
export default favoritosSlice.reducer
