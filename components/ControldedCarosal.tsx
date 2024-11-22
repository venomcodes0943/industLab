"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import IImage from "@/public/IndustLabs+Switchgear+Solutions.png";
import MImage from "@/public/MCC+Shipping+container.jpg";
import OImage from "@/public/1_8QsfWUfDHva1479lHFTNBQ.png";
import Link from "next/link";

const ControldedCarosal = () => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        slidesPerGroup={3}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="p-3">
          <Image src={IImage.src} alt="imagge" width={300} height={300} />
          <div className="text-white">Oct 7, 2024</div>
          <Link className="text-xl" href={"#"}>
            Essential Switchgear Solutions for Industrial Automation –
            IndustLabs
          </Link>
        </SwiperSlide>

        <SwiperSlide className="p-3">
          <Image src={MImage.src} alt="imagge" width={300} height={300} />
          <div className="text-white">Sep 12, 2023</div>
          <Link className="text-xl" href={"#"}>
            Why Shipping Containers Make Ideal Motor Control Center Enclosures
          </Link>
        </SwiperSlide>

        <SwiperSlide className="p-3">
          <Image src={OImage.src} alt="imagge" width={300} height={300} />
          <div className="text-white">Jul 17, 2023</div>
          <Link className="text-xl" href={"#"}>
            Leveraging Time Series Databases for IoT with Influxdb
          </Link>
        </SwiperSlide>
        <SwiperSlide className="p-3">
          <Image src={OImage.src} alt="imagge" width={300} height={300} />
          <div className="text-white">Jul 17, 2023</div>
          <Link className="text-xl" href={"#"}>
            Leveraging Time Series Databases for IoT with Influxdb
          </Link>
        </SwiperSlide>
        <SwiperSlide className="p-3">
          <Image src={OImage.src} alt="imagge" width={300} height={300} />
          <div className="text-white">Jul 17, 2023</div>
          <Link className="text-xl" href={"#"}>
            Leveraging Time Series Databases for IoT with Influxdb
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-5 right-20 flex space-x-2">
        <button className="swiper-button-prev text-black p-2 rotate-180 w-20 h-20"></button>
        <button className="swiper-button-next text-black p-2 rotate-180 w-20 h-20"></button>
      </div>
    </>
  );
};

export default ControldedCarosal;
