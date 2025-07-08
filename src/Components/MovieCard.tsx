import { IMG_CDN_URL } from "../Utils/Constants"

interface MovieCardProps {
    posterPath: string | null | undefined;
}

const MovieCard = ({ posterPath }: MovieCardProps) => {
  return (
    <div className="w-48 pr-4">
      {posterPath ? (
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
          className="cursor-pointer"
        />
      ) : (
        <div className="w-full h-72 bg-gray-700 text-white flex items-center justify-center text-sm">
          No Image
        </div>
      )}
    </div>
  )
}

export default MovieCard