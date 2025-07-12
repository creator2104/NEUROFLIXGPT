import { Netflix_BG_Image } from "../Utils/Constants"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
           <img src={Netflix_BG_Image} alt="Netflix-bg-Image" />
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch