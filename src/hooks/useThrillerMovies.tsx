import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addThrillerMovies } from "../Utils/movieslice"

const useThrillerMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getThrillerMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addThrillerMovies(json.results)) 
    }
    getThrillerMovies()
  }, [dispatch])
}

export default useThrillerMovies;
 