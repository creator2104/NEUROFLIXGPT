import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null, // initial state is set to null
        trailerVideo : null 
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
           state.nowPlayingMovies = action.payload; // whatever the data is given in dispatch will be added to the action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload; 
        }
    }
})

export const { addNowPlayingMovies , addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;