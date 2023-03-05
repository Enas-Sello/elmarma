import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ButtonGroups from "./ButtonGroups"
function SwiperComp() {
  const Slider = [
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "تلعب الان",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #e68735",
    },
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "لم تلعب بعد",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #615F59",
    },
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "تلعب الان",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #e68735",
    },
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "تلعب الان",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #e68735",
    },
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "تلعب الان",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #e68735",
    },
    {
      imgSrcFirst:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
      MainTitle: "دوري أبطال إفريقيا",
      result: [0, 1],
      status: "تلعب الان",
      time: "18:00",
      imgSrcSecond:
        "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
      badgeColor: " #e68735",
    },
  ]
  return (
    <div className="mt-4 mainSwipe">
      <ButtonGroups/>

      <Swiper
        className="bg-dark text-white"
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Slider.map((slide) => (
          <SwiperSlide>
            <div className="d-flex justify-content-between align-items-center position-relative sliderAfter p-4">
              {" "}
              <div>
                <img src={slide.imgSrcFirst} alt="" width={"50px"} />
              </div>
              <div className="d-flex flex-column  justify-content-center align-items-center">
                <h6>{slide.MainTitle}</h6>
                <div className="d-flex justify-content-around align-items-center w-100">
                  {slide.result.map((x) => (
                    <span>{x}</span>
                  ))}
                </div>
                <div
                  className="text-center w-100 rounded-pill"
                  style={{ backgroundColor: slide.badgeColor }}
                >
                  {slide.status}
                </div>
                <div>{slide.time}</div>
              </div>
              <div>
                <img src={slide.imgSrcSecond} alt="" width={"50px"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperComp
