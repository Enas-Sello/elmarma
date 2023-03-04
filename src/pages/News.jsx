import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
const news = {
  cardTitle:
    "    بعد 9 مباريات فقط.. ويجان يقيل كولو توريه من منصب المدير الفني",
  cardText:
    "أقال نادي ويجان الإنجليزي كولو توريه من منصب المدير الفني على خلفية النتائج السلبية الفترة السابقة.",
}
const club = [
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
  { link: "#", src: "images/club.jpg" },
]
const News = () => {
  return (
    <div className="col-xl-8 col-md-6  col-xs-12  main p-4 mt-5">
      {" "}
      <Row>
        <div className="d-flex flex-sm-column flex-xl-row  gap-2 mb-5">
          <Col xs={12} lg={7} xl={8}>
            <Card>
              <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="fs-3">{news.cardTitle}</Card.Title>
                <Card.Text className="fs-6">
                  <small>{news.cardText}</small>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} lg={3} xl={4}>
            <Card>
              <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="">{news.cardTitle}</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card>
              <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="">{news.cardTitle}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          {/* img column */}
        </div>
        <Row className="my-5">
          <Col>
            <Link to="">
              <img src="images/news1.jpg" alt="..." style={{ width: "100%" }} />
            </Link>
          </Col>
        </Row>{" "}
        <Row className="my-5">
          <div
            style={{
              background: "#E8EFF5",
              boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
            }}
            className="d-flex w-100 align-items-center justify-content-between p-2"
          >
            {club.map((A) => (
              <Link to={A.link}>
                <img src={A.src} alt="" />
              </Link>
            ))}
          </div>
        </Row>
      </Row>{" "}
    </div>
  )
}

export default News
