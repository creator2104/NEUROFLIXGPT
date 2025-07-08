import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addComedyMovies } from "../Utils/movieslice"

const useComedyMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getComedyMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addComedyMovies(json.results)) 
    }
    getComedyMovies()
  }, [dispatch])
}

export default useComedyMovies
 