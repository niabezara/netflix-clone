"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";
import { Movie } from "@/helper/moviesdata";

const SwiperUi: React.FC<{
  data: Movie[];
  renderItem: (item: Movie) => JSX.Element;
}> = ({ data, renderItem }) => {
  return (
    <div className="max-w-[1112px] lg:m-auto">
      <div>
        <Swiper
          scrollbar={{
            hide: true,
            enabled: false,
            dragClass: "swiper-scrollbar-drag",
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Scrollbar, Navigation]}
          centeredSlides={false}
          centeredSlidesBounds={true}
          slidesPerView="auto"
          spaceBetween={8}
          className="w-full"
          breakpoints={{
            375: {
              spaceBetween: 8,
            },
            768: {
              spaceBetween: 16,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full max-w-[329px] mb-4 mt-6"
            >
              {renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperUi;
