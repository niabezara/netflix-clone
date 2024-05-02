import React from "react";
import { Movie, moviesdata } from "@/helper/moviesdata";
import MovieCard from "../ui/MovieCard";
import SwiperUi from "../ui/Swiper";

function Listitems() {
  return (
    <div className="w-full">
      <div className="hidden lg:block relative w-[126px]">
        <button className="swiper-button-prev rounded-full border flex items-center "></button>
        <button className="swiper-button-next rounded-full border flex items-center "></button>
      </div>
      <SwiperUi
        data={moviesdata}
        renderItem={(movie: Movie) => <MovieCard movie={movie} />}
      />
    </div>
  );
}

export default Listitems;
