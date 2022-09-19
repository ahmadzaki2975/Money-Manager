import { Section } from "./Section"
import { Swiper, SwiperSlide } from "swiper/react"
import { freeMode } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Sections = () => {
  return(
    <div className="w-full mt-16">
      <h1 className="ml-[5%]">Sections</h1>
      <Swiper
        modules={[freeMode]}
        spaceBetween={1}
        slidesPerView={1.8}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="overflow-hidden flex items-center p-2"
      >
        <SwiperSlide className="flex justify-center p-2">
          <Section />
        </SwiperSlide>
        <SwiperSlide className="flex p-2 justify-center">
          <Section />
        </SwiperSlide>
      </Swiper >
    </div>
  )
}