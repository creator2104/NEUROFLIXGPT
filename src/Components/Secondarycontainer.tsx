import { useSelector } from "react-redux"
import MovieList from "./MovieList"

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  // Add other relevant fields as needed
}

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  upcomingMovies: Movie[];
  trendingMovies: Movie[];
  horrorMovies: Movie[];
  scifiMovies: Movie[];
  thrillerMovies: Movie[];
  comedyMovies: Movie[];
  // Add other movie categories if needed, e.g. trendingMovies, popularMovies, etc.
}

interface RootState {
  movies: MoviesState;
}

const Secondarycontainer = () => {
  const movies = useSelector((store: RootState) => store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-10 relative z-20">
      {/* 
      MovieList - popular 
        MovieCard * n 
      MovieList - Trending
      MovieList - Trending
      MovieList - Now Playing
      MovieList - Horror
      */}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.horrorMovies}/>
      <MovieList title={"Sci-Fi"} movies={movies.scifiMovies}/>
      <MovieList title={"Thriller"} movies={movies.thrillerMovies}/>
      <MovieList title={"Comedy"} movies={movies.comedyMovies}/>
      </div>
    </div>
  )
}

export default Secondarycontainer