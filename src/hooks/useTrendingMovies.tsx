import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addTrendingMovies } from "../Utils/movieslice"

const useTrendingMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addTrendingMovies(json.results)) 
    }
    getTrendingMovies()
  }, [dispatch])
}

export default useTrendingMovies;
 