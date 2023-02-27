import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
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
    },
  ]
  return (
    <div>
      <Swiper
        className="bg-dark text-white"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Slider.map((slide) => (
          <SwiperSlide>
            <div className="d-flex justify-content-between align-items-center mx-5 position-relative sliderAfter">
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
                  className="text-center p-1 bgOrang w-100 rounded-pill"
                  pill
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
