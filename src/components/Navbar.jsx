/////////// IMPORTS
///
import { Settings } from "../setting"
import { Link } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs" /////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Navbar = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      <div className="bg-dc">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex  logo my-2">
              {/* logo */}
              <Link
                to="/"
                className="flex-column justify-content-center gap-2 text-white p-3"
              >
                <div className="d-flex gap-2">
                  <img width={50} src="images/Logo.jpg" alt="" />
                  <div className="d-flex flex-column text-center">
                    <h2>المرمي</h2>
                    <p>موقع لأخبار الكورة</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-75">
              <div class="inputGroup">
                <span class="inputGroupText">
                  <FiSearch />
                </span>
                <input
                  type="text"
                  class="formControl"
                  placeholder="بحث"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////// */}
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <span className="navbar-toggler-icon"> </span>
              </button>

              <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                  <li className="nav-item mx-3">
                    <Link
                      to="matches"
                      className="nav-link active text-white"
                      aria-current="page"
                    >
                      المباريات
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      الاخبار
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      الدوريات والبطولات
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      ميديا المرمى
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      اخر الانتقالات
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn text-primary position-relative  d-flex align-items-end justify-content-end p-2 w-100"
                    >
                      <Link to="" className="">
                        متجر المرمي
                      </Link>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        new
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </li>
                </ul>
                <div> </div>
                <div className=" d-flex gap-3 Social align-items-start justify-content-start p-2 w-100">
                  {" "}
                  <Settings />
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
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
