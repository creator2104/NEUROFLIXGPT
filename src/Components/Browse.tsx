import useComedyMovies from "../hooks/useComedyMovies"
import useHorrorMovies from "../hooks/useHorrorMovies"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useSciFiMovies from "../hooks/useScifiMovies"
import useThrillerMovies from "../hooks/useThrillerMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
const Browse = () => {

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
      {/* Maincontainer 
          -videobackground
          -videotitle
          Secondarycontainer
          -Movielist * n
           - cards * n  */}
      <Maincontainer/>
      <Secondarycontainer/>   
    </div>
  )
}

export default Browse