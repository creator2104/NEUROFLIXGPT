import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  poster_path: string;
  // add other properties if needed
}

interface MovieListProps {
  title: string;
  movies: Movie[] | null | undefined; // allow null/undefined
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null; // early return if no movies
  return (
    <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {/* scrollbar hide used for hiding scrollbar */}
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
