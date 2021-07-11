/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// images
import GoogleImage from "assets/img/icons/common/google.svg";
import GithubImage from "assets/img/icons/common/github.svg";
import { isElementAccessExpression } from "typescript";

class ForgotPassword extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  verifyEmail(){
    return true;
  }

  addCodeInput(){
    if(true){

      // var keyInput = '<FormGroup className="mb-3"> <InputGroup className="input-group-alternative"> <InputGroupAddon addonType="prepend"> <InputGroupText> <i className="ni ni-key-25" /> </InputGroupText> </InputGroupAddon> <Input placeholder="Code" type="text" /> </InputGroup> </FormGroup>';
      // document.getElementById("inputCode").innerHTML += keyInput;
      var inputGroup = document.createElement("InputGroup");
      inputGroup.className = "input-group-alternative";
      var input = document.createElement("Input");
      inputGroup.appendChild(input);
      document.getElementById("inputCode").appendChild(inputGroup);
      console.log("hoolo");

    } else {

    }

    // document.getElementById("codeReq")
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container>
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <big className="font-weight-bold">Forgot Password</big><br/>
                        <small>Enter Email</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>                          
                        </FormGroup>

                        <FormGroup id="inputCode" className="mb-3">

                        </FormGroup>

                        <div className="text-center">
                          <Button
                            id="codeReq"
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={this.addCodeInput}
                          >
                            Request Code
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default ForgotPassword;
