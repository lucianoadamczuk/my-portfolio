"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./CarouselAbout.css";

// import required modules
import { Pagination } from "swiper/modules";
import { carousel } from "@/contents/about/carousel";

export default function CarouselAbout(): React.ReactNode {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        spaceBetween={30}
        modules={[Pagination]}
        className="w-full CarouselAbout "
      >
        <ul>
          {carousel.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <h6 className=" text-gray opacity-60 font-bold">{item.title}</h6>
              {item.text.map((item, index) => (
                <motion.li
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  key={uuidv4()}
                  className=" my-5 list-inside list-disc"
                >
                  {item}
                </motion.li>
              ))}
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
}
