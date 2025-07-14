import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GPTSearchBar = () => {

    interface RootState {
      config: {
        lang: keyof typeof lang;
      };
    }
    const langKey = useSelector((store: RootState) => store.config.lang)

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="search"
          className=" p-4 my-4 ml-4 mr-2 col-span-9 bg-white text-black rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 my-4 ml-2 mr-4 bg-red-700 hover:bg-red-800 cursor-pointer text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form> 
    </div>
  );
};

export default GPTSearchBar;
