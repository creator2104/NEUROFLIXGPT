import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addPopularMovies } from "../Utils/movieslice"

const usePopularMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addPopularMovies(json.results)) 
    }
        getPopularMovies()
  }, [dispatch])
}

export default usePopularMovies;
 