import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

export const reset = createAction('app/reset');

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      // State is not the big state object
      // In  the store
      // It is the piece of state managed
      // by this reducer
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string we want to remove song
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };

export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

// console.log(songsSlice.actions.addSong('Some Song!!'));

// songsSlice.actions.addSong('Some Song!!');

// const startingState = store.getState();
// console.log(startingState);

// // store.dispatch({
// //   type: 'song/addSong',
// //   payload: 'New Song!!',
// // });

// store.dispatch(songsSlice.actions.addSong('Some Song!'));

// const finalState = store.getState();
// console.log(finalState);
