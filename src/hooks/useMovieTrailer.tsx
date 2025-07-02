import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/movieslice";

interface MovieVideo {
  id: string | number;
  key: string;
  name: string;
  site: string;
  type: string;
  [key: string]: string | number | undefined;
}

const useMovieTrailer = (movieId: string | number) => {
const dispatch = useDispatch();
  useEffect(() => {
    // fetch trailer video
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json);

      const filteredData = json.results.filter(
        (video: MovieVideo) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      // we have multiple videos so we are filtering the video which is of type trailer and also we want single trailer so we are taking the first video
    //   console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideos();
  }, [dispatch, movieId]);
}

export default useMovieTrailer;