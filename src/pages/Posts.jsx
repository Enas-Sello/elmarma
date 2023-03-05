import React from "react"
import { CardGroup, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import PostsCard from "../components/PostsCard"
import SideBar from "../components/SideBar"
const Posts = () => {
  const posts = [
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
  ]
  return (
    <Row className="mt-5 p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main ">
        <Row>
          <div className="d-flex align-items-center gap-1">
            <CgFileDocument
              style={{ width: "24px", height: "24px", color: "#0573F6" }}
            />
            <h4 className="fs-4 my-3">الاخبار</h4>
          </div>
        </Row>
        <Row>
          <CardGroup>
            <PostsCard posts={posts} xs={12} lg={6} xl={4} />
          </CardGroup>
        </Row>
      </div>
      <SideBar />
    </Row>
  )
}

export default Posts
