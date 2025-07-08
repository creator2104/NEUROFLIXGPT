import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addHorrorMovies } from "../Utils/movieslice"

const useHorrorMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getHorrorMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addHorrorMovies(json.results)) 
    }
    getHorrorMovies()
  }, [dispatch])
}

export default useHorrorMovies;
 