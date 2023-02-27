import React from "react"
import { Button, Card, Form, Row } from "react-bootstrap"
import PostsCard from "./PostsCard"

const SideBar = () => {
  const posts = [
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
  ]

  const List = [
    {
      count: "1",
      title:
        "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
    {
      count: "1",
      title:
        "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
    {
      count: "1",
      title:
        "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
  ]
  return (
    <div className="col-xl-4 col-md-6  mt-5 d-none d-md-block">
      <Row>
        <div className="d-flex flex-column gap-3">
          <PostsCard posts={posts} xs={12} lg={12} xl={12} ImgOverlay />
          <div className="d-flex justify-content-between">
            <PostsCard posts={posts} xs={6} lg={6} xl={6} />
            <PostsCard posts={posts} xs={6} lg={6} xl={6} />
          </div>
          {/* الأكثر قراءة*/}
          <Card className="rounded">
            <Card.Body className="bg-dark ">
              <Card.Title className="text-white">الأكثر قراءة</Card.Title>
            </Card.Body>
            <ul class="list-group list-group-flush">
              {List.map((li) => (
                <li class="list-group-item">
                  <p className="d-flex fsmain">
                    {li.title}
                    <span className="border-start p-3 text-primary">
                      {li.count}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>
          {/* اشترك */}
          <Card className="text-white text-end ">
            <Card.Img src="images/email.jpg" className="card-img" alt="..." />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center gap-5">
              <div>
                <Card.Title className="fs-6">اشترك في </Card.Title>
                <Card.Text className="fs-4 text-muted">
                  النشرة البريدية
                </Card.Text>
              </div>
              <div className="d-flex flex-column justify-content-center gap-3">
                {" "}
                <Form>
                  <Form.Control
                    className="bg-dark"
                    type="email"
                    placeholder="أدخل بريدك الالكتروني"
                  />
                </Form>
                <Button variant="primary" size="lg">
                  اشترك
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Row>
    </div>
  )
}

export default SideBar
