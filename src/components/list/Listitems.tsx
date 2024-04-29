import React from "react";
import { Movie, moviesdata } from "@/helper/moviesdata";
import MovieCard from "../ui/MovieCard";
import SwiperUi from "../ui/swiper";

function Listitems() {
  return (
    <div className="max-w-[1112px] lg:m-auto">
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
