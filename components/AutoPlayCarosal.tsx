"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarosalFilpCard from "./CarosalFilpCard";

export default function AutoPlayCarosal() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-16 p-2">
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696600899469-PDZY5U7LS09DIMKS2CX5/motor-control-center.jpg"
              text="IndustLabs has over a decade of experience working with our manufacturing partners to build custom automation across a wide variety of industries. We can help reduce costs..."
            />
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696605446639-OIETORC4XMDO4MYDDT8T/manufacturing-automation.jpg"
              text="Industlabs is a Leading Automation expert providing World-class Automation and Control Solutions, SCADA IOT Services, Real-Time Data monitoring, Control Room Centers, Industrial IoT, Industrial ..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-16 p-2">
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696600899469-PDZY5U7LS09DIMKS2CX5/motor-control-center.jpg"
              text="IndustLabs has over a decade of experience working with our manufacturing partners to build custom automation across a wide variety of industries. We can help reduce costs..."
            />
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696605446639-OIETORC4XMDO4MYDDT8T/manufacturing-automation.jpg"
              text="Industlabs is a Leading Automation expert providing World-class Automation and Control Solutions, SCADA IOT Services, Real-Time Data monitoring, Control Room Centers, Industrial IoT, Industrial ..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-16 p-2">
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696600899469-PDZY5U7LS09DIMKS2CX5/motor-control-center.jpg"
              text="IndustLabs has over a decade of experience working with our manufacturing partners to build custom automation across a wide variety of industries. We can help reduce costs..."
            />
            <CarosalFilpCard
              image="https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1696605446639-OIETORC4XMDO4MYDDT8T/manufacturing-automation.jpg"
              text="Industlabs is a Leading Automation expert providing World-class Automation and Control Solutions, SCADA IOT Services, Real-Time Data monitoring, Control Room Centers, Industrial IoT, Industrial ..."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
