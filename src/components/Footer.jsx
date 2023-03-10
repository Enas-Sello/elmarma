import React from "react"
import { ModalFooter } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <ModalFooter className="footer  bg-dark flex-column justify-content-center gap-2 text-white p-3">
      <div className="d-flex gap-2">
        <div className="d-flex flex-column text-center">
          <h2>المرمي</h2>
          <p>موقع لأخبار الكورة</p>
        </div>
        <img src="images/Logo.jpg" alt="" />
      </div>
      <div className=" d-flex gap-5 RoutLink">
        <Link to="#" className="">
          المباريات
        </Link>
        <Link to="#">الأخبار</Link>
        <Link to="#">الدوريات و البطولات</Link>
        <Link to="#">ميديا المرمي</Link>
        <Link to="#">اخر الانتقالات</Link>
      </div>
      <div className=" d-flex gap-3 Social">
        <Link to="#" className="">
          <AiFillYoutube />
        </Link>
        <Link to="#" className="">
          <BsLinkedin />
        </Link>
        <Link to="#" className="">
          <FaInstagram />
        </Link>
        <Link to="#" className="">
          <BsFacebook />
        </Link>
        <Link to="#" className="">
          <BsTwitter />
        </Link>
      </div>
      <p>جميع الحقوق محفوظة لدي @2023</p>
    </ModalFooter>
  )
}

export default Footer
