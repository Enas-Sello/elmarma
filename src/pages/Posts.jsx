import React from "react"
import { CardGroup, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import PostsCard from "../components/PostsCard"
const Posts = () => {
  const TimeLineTrack = "حديثه"
  const TimeLineBgTrack = "success"

  return (
    <div className="col-xl-8 col-md-6  col-xs-12  main p-4 mt-5">
      <Row>
        <div className="d-flex justify-content-end align-items-center gap-1">
          <h4 className="fs-4 my-3">الاخبار</h4>
          <CgFileDocument
            style={{ width: "24px", height: "24px", color: "#0573F6" }}
          />
        </div>
      </Row>
      <Row>
        <CardGroup>
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
          <PostsCard
            TimeLineTrack={TimeLineTrack}
            TimeLineBgTrack={TimeLineBgTrack}
            xs={12}
            lg={6}
            xl={4}
            width="16rem"
          />
        </CardGroup>
      </Row>
    </div>
  )
}

export default Posts
