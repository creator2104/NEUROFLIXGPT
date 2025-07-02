import { useSelector } from "react-redux"
import type { RootState } from "../Utils/Appstore"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const Maincontainer = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies)
    if(!movies)return ;
    const mainMovie = movies?.[0]; 
    const {original_title, overview , id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default Maincontainer