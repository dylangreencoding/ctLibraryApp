import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    title: 'title',
    author: 'author',
    genre: 'genre',
    isbn: 'isbn',
  },
  reducers: {
    chooseTitle: (state, action) => { state.title = action.payload},
    chooseAuthor: (state, action) => { state.author = action.payload},
    chooseGenre: (state, action) => { state.genre = action.payload},
    chooseIsbn: (state, action) => { state.isbn = action.payload},
  }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseGenre, chooseIsbn } = rootSlice.actions;