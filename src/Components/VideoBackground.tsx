import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

interface VideoBackgroundProps {
  movieId: string;
}

const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const trailerVideo = useSelector((store:any) => store.movies?.trailerVideo);
  useMovieTrailer(movieId)
    if (!trailerVideo?.key) return <div>Loading trailer...</div>;
  return (
    <div className="relative w-full aspect-video overflow-hidden">
            <iframe className="absolute top-[-22%]  left-0 w-full h-[120%] pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playlist=${trailerVideo.key}&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
