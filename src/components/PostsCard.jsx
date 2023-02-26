import React from "react"
import { Badge, Card, Col } from "react-bootstrap"

const PostsCard = ({
  xs,
  lg,
  xl,
  TimeLineBgTrack,
  TimeLineTrack,
  width,
  ImgOverlay,
}) => {
  return (
    <Col xs={xs} lg={lg} xl={xl}>
      <Card style={{ width: width, margin: "8px", padding: "5px" }}>
        <div className="position-relative">
          <Badge
            className="position-absolute badge p-2"
            pill
            bg={TimeLineBgTrack}
          >
            {TimeLineTrack}
          </Badge>
          <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
        </div>
        {ImgOverlay ? (
          <Card.ImgOverlay>
            <p
              className="card-text"
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "50%",
                transform: "translate(-35%)",
              }}
            >
              <small className="text-white fw-bold w-100">
                إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي
              </small>
            </p>
          </Card.ImgOverlay>
        ) : (
          <>
            {" "}
            <Card.Body>
              <Card.Title className="lightGreen"> الدوري السعودي </Card.Title>
              <Card.Text className="fs-6">
                رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                الجمعة 17 فبراير 2023 07:17 م
              </small>
            </Card.Footer>
          </>
        )}
      </Card>{" "}
    </Col>
  )
}

export default PostsCard
