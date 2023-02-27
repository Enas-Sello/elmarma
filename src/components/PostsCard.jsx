import React from "react"
import { Badge, Card, Col } from "react-bootstrap"

const PostsCard = ({
  xs,
  lg,
  xl,
  posts,
  TimeLineBgTrack,
  TimeLineText,
  ImgOverlay,
  Img,
  overlayTitle,
  cardTitle,
  cardText,
  cardFooter,
}) => {
  return (
    <>
      {posts.map((post) => (
        <Col xs={xs} lg={lg} xl={xl}>
          <Card style={{ margin: "8px", padding: "5px" }}>
            <div className="position-relative">
              <Badge
                className="position-absolute badge p-2"
                pill
                bg={post.TimeLineBgTrack}
              >
                {post.TimeLineText}
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
                    {post.overlayTitle}
                  </small>
                </p>
              </Card.ImgOverlay>
            ) : (
              <>
                {" "}
                <Card.Body>
                  <Card.Title className="lightGreen">
                    {post.cardTitle}
                  </Card.Title>
                  <Card.Text className="fs-6">{post.cardText}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{post.cardFooter}</small>
                </Card.Footer>
              </>
            )}
          </Card>{" "}
        </Col>
      ))}
    </>
  )
}

export default PostsCard
