import Image from "next/image";
import { Icons } from "../shared/Icons";
const genres = [
  "Adventure",
  "Comedy",
  "Crime",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Sci-fi",
  "Thriller",
  "Western",
  "Animation",
  "Drama",
  "Documentary",
];

export default function Featured({ type }: any) {
  return (
    <div className="h-[90vh] relative">
      {type && (
        <div className="absolute top-[80px] left-[50px] text-[27px] font-medium text-white flex items-center">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            className="cursor: pointer bg-gray-600 border-white text-white ml-5 p-[5px]"
          >
            <option>Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre.toLowerCase()}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/360.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className=" w-[35%] absolute left-[50px] bottom-24 text-white flex flex-col">
        <Image
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
          width={500}
          height={500}
        />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="flex justify-start gap-10 items-center text-[18px] font-medium mr-[10px] cursor-pointer border-none mt-4">
          <button className="bg-white py-[10px] px-[20px] rounded-[5px] flex">
            <Icons.playIcon />
            <span className="text-black">Play</span>
          </button>
          <button className="bg-gray-500 py-[10px] px-[20px] rounded-[5px] flex w-24 gap-1 items-center">
            <Icons.info />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
