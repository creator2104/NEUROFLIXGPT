import { useSelector } from "react-redux"
import useComedyMovies from "../hooks/useComedyMovies"
import useHorrorMovies from "../hooks/useHorrorMovies"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useSciFiMovies from "../hooks/useScifiMovies"
import useThrillerMovies from "../hooks/useThrillerMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GPTSearch from "./GPTSearch"
import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
const Browse = () => {
  // Define RootState according to your Redux store structure
  interface RootState {
    gpt: {
      showGPTSearch: boolean;
    };
    // add other slices if needed
  }

  const showGPTSearch = useSelector((store: RootState) => store.gpt.showGPTSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpcomingMovies()
  useHorrorMovies()
  useSciFiMovies()
  useThrillerMovies()
  useComedyMovies()

  return (
    <div>
      <Header/>
      {
        showGPTSearch ? <GPTSearch/> : <><Maincontainer/><Secondarycontainer/></>   
      }
      {/* Maincontainer 
          -videobackground
          -videotitle
          Secondarycontainer
          -Movielist * n
           - cards * n  */}
      
    </div>
  )
}

export default Browse