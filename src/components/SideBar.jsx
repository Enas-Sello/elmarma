import React from "react"
import { Card, Row } from "react-bootstrap"
import PostsCard from "./PostsCard"

const SideBar = () => {
  const TimeLineTrack = "حديثه"
  const TimeLineBgTrack = "success"

  return (
    <div className="col-4  p- mt-5">
      <Row>
        <div className="d-flex flex-column">
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={12}
            xl={12}
            width="25rem"
            ImgOverlay
          />
          <div className="d-flex     justify-content-between;">
            <PostsCard
              TimeLineTrack={TimeLineTrack}
              TimeLineBgTrack={TimeLineBgTrack}
              width="12rem"
              xs={6}
              lg={6}
              xl={6}
            />
            <PostsCard
              TimeLineTrack={TimeLineTrack}
              TimeLineBgTrack={TimeLineBgTrack}
              width="12rem"
              xs={6}
              lg={6}
              xl={6}
            />
          </div>
        </div>
      </Row>
    </div>
  )
}

export default SideBar
