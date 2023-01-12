import { configureStore } from '@reduxjs/toolkit';

import { songReducer } from './slices/songsSlice';
import { moviesReducer } from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

export { store };

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
