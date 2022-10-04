import { Section } from "./Section"
import { Swiper, SwiperSlide } from "swiper/react"
import { freeMode } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Sections = () => {
  return(
    <div className="mt-12 w-[95%] mx-[5%] overflow-x-hidden">
      <h1 className="ml-[5%]">Sections</h1>
      <Swiper
        // modules={[freeMode]}
        spaceBetween={1}
        slidesPerView={1.8}
        onSwiper={(swiper) => {}}
        className="overflow-hidden flex items-center p-2 w-[500px]"
      >
        <SwiperSlide className="flex justify-center py-2 cursor-pointer">
          <Section title="Log" link="/dashboard/log"/>
        </SwiperSlide>
        <SwiperSlide className="flex p-2 justify-center cursor-pointer">
          <Section title="Statistics" link="/dashboard/statistics" />
        </SwiperSlide>
      </Swiper >
    </div>
  )
}