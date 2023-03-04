import React from "react"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"

const ButtonGroups = () => {
  return (
    <Row className="">
      <Col lg={9}>
        <ButtonGroup
          aria-label="Basic"
          style={{
            filter: "drop-shadow(0.5px 0.5px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "5px",
          }}
          className="ButtonGroups d-flex align-items-end justify-content-end m-auto w-50"
        >
          <Button className=" py-2 px-5 text-dark" variant="light">
            امس
          </Button>
          <Button className=" py-2 px-5  text-dark" variant="light">
            اليوم
          </Button>
          <Button className=" py-2 px-5 text-dark" variant="light">
            غدا
          </Button>
        </ButtonGroup>
      </Col>
      <Col lg={3}>
        <Link to="" className="d-flex align-items-end justify-content-end">
          <div className="d-flex bg-primary rounded-3  align-items-center justify-content-center">
            <p className="text-white m-0 p-2">جميع المباريات</p>
            <MdKeyboardArrowLeft
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </div>
        </Link>
      </Col>
    </Row>
  )
}

export default ButtonGroups
