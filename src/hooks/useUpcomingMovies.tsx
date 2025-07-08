import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addUpcomingMovies } from "../Utils/movieslice"

const useUpcomingMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addUpcomingMovies(json.results)) 
    }
        getUpcomingMovies()
  }, [dispatch])
}

export default useUpcomingMovies;
 