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

import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormFeedback,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";


const ForgotPassLayout = () => {
  const [codeRequested, setCodeRequested] = useState('emailContainer')
  const [emailInput, setEmailInput] = useState('')
  const requestCode = (email) => {
    setEmailInput(email) // email for next container
    setCodeRequested('codeContainer')
  }


  const loadContainer = () => {
    if(codeRequested === 'emailContainer'){
      return (<ForgotPass requestCode={requestCode} />)
    }
    else if(codeRequested === 'codeContainer'){
      return(<VerificationCodeForm emailInput={emailInput} setCodeRequested={setCodeRequested} />)
    }
    else if(codeRequested === 'passContainer'){
      return(<UpdatePass />)
    }
  }

  return (
    <>
      <DemoNavbar />
      <main>
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
                    {
                      loadContainer()
                    }
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  )
}

const ForgotPass = ({ requestCode }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const submitForm = () => {
    //add some database serach request here as verification
    if (email.trim().length === 0) {
      setError('Please enter email')
    } else if(!email.includes('@')) {
      setError('Please enter email')
    }else {
      requestCode(email)
    }
  }

  return (
    <div>
      <div className="text-center text-muted mb-4">
        <h4 className="font-weight-bold">Forgot Password</h4>
        <small>Enter Email</small>
      </div>
      <Form role="form" onSubmit={submitForm}>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input invalid={!!error} placeholder="Email" type="email" defaultValue={email}
              onChange={(e) => setEmail(e.target.value)} />
            <FormFeedback tooltip className="mt-1">{error}</FormFeedback>
          </InputGroup>

        </FormGroup>

        <div className="text-center">
          <Button
            id="codeReq"
            className="my-4"
            color="primary"
            type="button"
            onClick={submitForm}
          >
            Request Code
          </Button>
        </div>
      </Form>
    </div>
  )
}

const VerificationCodeForm = ({ emailInput, setCodeRequested }) => {
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  const submitForm = () => {
    //add some database serach request here as verification
    if (code.trim().length === 0) {
      setError('Please enter your code')
    } else {
      setCodeRequested('passContainer')
      ///window.location.href="login";
    }
  }

  return (
    <div>
      <div className="text-center text-muted mb-4">
        <h4 className="font-weight-bold">Verify Code</h4>
        <small>{`Please enter the code that was sent to ${emailInput}.`}</small>
      </div>
      <Form role="form" onSubmit={submitForm}>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-key-25" />
              </InputGroupText>
            </InputGroupAddon>
            <Input invalid={!!error} placeholder="Verification Code" type="text" onChange={(e) => setCode(e.target.value)} />
            <FormFeedback tooltip className="mt-1">{error}</FormFeedback>
          </InputGroup>
        </FormGroup>

        <div className="text-center">
          <Button
            id="codeReq"
            className="my-4"
            color="primary"
            type="button"
            onClick={submitForm}
          >
            Verify
          </Button>
        </div>
      </Form>
    </div>
  )
}

const UpdatePass = () => {
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState(null)

  const updatePassword = () => {
    //backend update / api
  }

  const validPass = () => {
    // certain passsword specifications such as min length must/contain nums/one cap letter etc. 
    return true
  }


  const submitForm = () => {
    //add some database serach request here as verification
    if (pass.trim().length === 0 || confirmPass.trim().length === 0) {
      setError('Missing field')
    } else if(!(pass===confirmPass)) {
      setError('Passwords dont match')
    } else if(!validPass()){
    } else {
      updatePassword()
      window.location = "login"
    }
  }

  return (
    <div>
      <div className="text-center text-muted mb-4">
        <h4 className="font-weight-bold">Update Password</h4>
        <small>Enter a new password.</small>
      </div>
      <Form role="form" onSubmit={submitForm}>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <Input placeholder="Password" type="password"
              onChange={(e) => setPass(e.target.value)} />
          </InputGroup>
          <InputGroup className="input-group-alternative mt-3">
            <Input invalid={!!error} placeholder="Confirm Password" type="password"
              onChange={(e) => setConfirmPass(e.target.value)} />
            <FormFeedback tooltip className="mt-3">{error}</FormFeedback>
          </InputGroup>
        </FormGroup>

        <div className="text-center">
          <Button
            id="codeReq"
            className="mt-5 mb-4"
            color="primary"
            type="button"
            onClick={submitForm}
          >
            Update
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ForgotPassLayout;
