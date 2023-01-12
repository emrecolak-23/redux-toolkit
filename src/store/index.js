import { configureStore } from '@reduxjs/toolkit';

import { songReducer } from './slices/songsSlice';
import { moviesReducer } from './slices/moviesSlice';

import { addSong, removeSong } from './slices/songsSlice';
import { addMovie, removeMovie } from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

export { store };
export { addSong, removeSong, addMovie, removeMovie };

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
