import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/CardsFooter.js";

// images
import PlaceholderImage1 from "assets/img/theme/team-2-800x800.jpg";
import PlaceholderImage2 from "assets/img/theme/team-3-800x800.jpg";
import PlaceholderImage3 from "assets/img/theme/team-4-800x800.jpg";
import PlaceholderImage4 from "assets/img/theme/team-1-800x800.jpg";

class About extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="0">
                      <h1 className="display-3 text-white">
                        About Us{" "}
                      </h1>
                      <p className="lead text-white">
                        Metanoia is an upcoming EdTech startup that seeks to put social issues 
                        at the forefront of children’s lives through our virtual interactive library. 
                        Our website bridges the communication gap between parents/teachers and students by 
                        tailoring personalized book recommendations that foster meaningful discussions. 
                        K-5 students will be able to enrich their knowledge whenever and wherever they go!
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* Founder Intros */}
            <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Our Team</h2>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage1}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Astha Rai</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Co-Founder</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage2}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Jessica Li</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Co-Founder</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  {/* maybe add lg="3" md="6"?? */}
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage3}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Tanvee Joshi</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Co-Founder</span>
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage1}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Cassidy Cheng</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Head of BD/Marketing</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage2}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Joyce Mok</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Head of UI/UX</span>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  {/* maybe add lg="3" md="6"?? */}
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={PlaceholderImage4}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Brett Woltz</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Head of Web + Software Development</span>
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
          </main>
          <SimpleFooter />
          </>
    );
  }
}

export default About;