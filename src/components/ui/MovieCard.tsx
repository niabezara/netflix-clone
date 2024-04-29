import React from "react";
import Image from "next/image";
import { Movie } from "@/helper/moviesdata";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="relative shadow-md rounded border-[1px] border-gradient-to-r from-[#000]/[0.0] to-[#000]/[0.15] ">
      <Image
        src={movie.image}
        alt="tour image"
        width={339}
        height={135}
        layout="responsive"
      />

      <Image
        src={movie.image}
        alt="tour agency image"
        width={43}
        height={43}
        layout="fixed"
        className="rounded-full absolute top-2 right-2 "
      />
      <div className="absolute top-0 "></div>
      <div className="pb-4 pt-2 px-4 flex flex-col gap-2 font-light text-[14px] leading-[17.36px]">
        <div className="flex justify-between">
          <article>
            <p className="text-[16px] leading-[19.84px] text-[#151515] font-light">
              {movie.title}
            </p>
          </article>
          <article className="flex flex-col items-end">
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
          </article>
        </div>
        <button className="bg-[#3043EA] rounded py-[14px] px-[29px] font-normal text-white leading-[19.84px] text-[16px]">
          {movie.trailer}
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
