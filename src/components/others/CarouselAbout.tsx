"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { carousel } from "@/contents/about/carousel";

export default function CarouselAbout(): React.ReactNode {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full  "
      >
        <ul>
          {carousel.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <h6 className=" font-bold">{item.title}: </h6>
              {item.text.map((item) => (
                <li key={uuidv4()} className=" my-5 list-inside list-disc">
                  {item}
                </li>
              ))}
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
}
