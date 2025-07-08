import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addNowPlayingMovies } from "../Utils/movieslice"

const useNowPlayingMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results)) 
    }
    getNowPlayingMovies()
  }, [dispatch])
}

export default useNowPlayingMovies
 