import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
const Browse = () => {

  useNowPlayingMovies()
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