import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null, // initial state is set to null
        trailerVideo : null ,
        popularMovies : null,
        trendingMovies : null,
        upcomingMovies : null ,
        horrorMovies : null,
        scifiMovies : null,
        thrillerMovies : null,
        comedyMovies : null 
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
           state.nowPlayingMovies = action.payload; // whatever the data is given in dispatch will be added to the action.payload
        },
        addPopularMovies : (state,action)=>{
           state.popularMovies = action.payload
        },
        addTrendingMovies : (state,action)=>{
           state.trendingMovies = action.payload
        },
        addUpcomingMovies : (state,action)=>{
           state.upcomingMovies = action.payload
        },
        addHorrorMovies : (state,action)=>{
           state.horrorMovies = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload; 
        },
        addSciFiVideo : (state,action) =>{
            state.scifiMovies = action.payload; 
        },
        addThrillerMovies : (state,action) =>{
            state.thrillerMovies = action.payload; 
        },
        addComedyMovies : (state,action) =>{
            state.comedyMovies = action.payload; 
        },
    }
})

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTrendingMovies , addHorrorMovies , addUpcomingMovies , addSciFiVideo , addThrillerMovies , addComedyMovies} = movieSlice.actions;
export default movieSlice.reducer;