import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/Constants"
import { addSciFiVideo } from "../Utils/movieslice"

const useSciFiMovies = () => {
    
// Fetch the data from the TMDB API and update the store    
  const dispatch = useDispatch()
  useEffect(() => {
    const getSciFiMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=popularity.desc&page=1', API_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addSciFiVideo(json.results)) 
    }
    getSciFiMovies()
  }, [dispatch])
}

export default useSciFiMovies;
 