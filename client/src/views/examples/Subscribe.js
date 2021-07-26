import React from "react";
// nodejs library that concatenates classes
import "./Subscribe.css";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/CardsFooter.js";

// images
import Banner from "assets/img/theme/website-image.png";

class Subscribe extends React.Component {
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
              <div className="shape shape-style-1 shape-default cont">
                <img alt="..." src={Banner} className="bannerStyles4" />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="0">
                      <h1
                        className="display-3 text-white"
                        style={{ margin: 15 }}
                      >
                        Subscribe to Our Newsletter{" "}
                      </h1>
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
            {/* 1st Hero Variation */}

            <section className="section">
              <Container>
                <Card className="card-profile shadow mt--300">
                  <div className="text-center mt-2 icont">
                    <h4>
                      Fill out the form below to receive personalized book
                      recommendations!
                    </h4>
                    <iframe
                      className="responsive-iframe"
                      src="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_1AFALlunx5Un8Rn"
                      width="700"
                      height="520"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>
                </Card>
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Subscribe;
