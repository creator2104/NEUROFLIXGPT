import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

interface TrailerVideo {
  key: string;
}

interface MoviesState {
  trailerVideo?: TrailerVideo;
}

interface RootState {
  movies: MoviesState;
}

interface VideoBackgroundProps {
  movieId: string;
}

const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const trailerVideo = useSelector((store: RootState) => store.movies?.trailerVideo);
  useMovieTrailer(movieId)
    if (!trailerVideo?.key) return <div>Loading trailer...</div>;
  return (
    <div className="relative w-full aspect-video overflow-hidden">
            <iframe className="absolute left-0 w-full top-0 h-full scale-[1.35] origin-center pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playlist=${trailerVideo.key}&loop=1&vq=highres
`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
