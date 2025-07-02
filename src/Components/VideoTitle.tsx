import { FaInfoCircle, FaPlay } from "react-icons/fa";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="pt-[20%] px-20 absolute text-white w-screen aspect-video h-screen z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>       
      <div className="flex">
        <button className="flex items-center gap-2 bg-white p-3 px-8 text-xl text-black hover:bg-white/70 rounded-sm cursor-pointer shadow-sm">
          <FaPlay size={20} />
          <span>Play</span>
        </button>
        <button className="mx-3 flex items-center gap-2 bg-gray-500/60 shadow-sm hover:bg-gray-500/30 text-white p-3 px-8 text-xl rounded-sm cursor-pointer">
           <FaInfoCircle size={24} />   
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
