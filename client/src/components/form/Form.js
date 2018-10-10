import React, { PropTypes } from "react";
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon
} from "react-bootstrap";

import FormControlFeedback from "react-bootstrap/lib/FormControlFeedback";
import InputGroupAddon from "react-bootstrap/lib/InputGroupAddon";


const title = "Forms";

function Form(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Add someone new</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span />}>
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>First Name:</ControlLabel>
                    <FormControl type="text" placeholder="First Name" />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Last Name:</ControlLabel>
                    <FormControl type="text" placeholder="Last Name" />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Phone Number</ControlLabel>
                    <FormControl type="tel" placeholder="What's your number?" />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formBasicFile">
                    <ControlLabel>Upload a photo</ControlLabel>
                    <FormControl type="file" />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Wheelchair Accessible</ControlLabel>
                    <Col>
                      <Checkbox inline>yes</Checkbox>{" "}
                      <Checkbox inline>no</Checkbox>{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Wheelchair Accessible</ControlLabel>
                    <Col>
                      <Radio inline>1</Radio> <Radio inline>2</Radio>{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Gender:</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option>Male</option>
                      <SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION>Female</option>
                              </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Gender: </ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option>Male</option>
                      <option>Female</option>
                        </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit">Submit Button</Button>
                    {"  "}
                    <Button type="reset">Reset Button</Button>
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg-6">
               
                <h1>Form Validation States</h1>
                <Form>
                  <FormGroup
                    controlId="formValidationSuccess2"
                    validationState="success"
                  >
                    <ControlLabel>Input with success</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup
                    controlId="formValidationWarning1"
                    validationState="warning"
                  >
                    <ControlLabel>Input with warning</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup
                    controlId="formValidationWarning1"
                    validationState="error"
                  >
                    <ControlLabel>Input with Error</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                </Form>

                <h1>Input Groups</h1>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>@</InputGroupAddon>
                      <FormControl type="text" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroupAddon>.00</InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>$</InputGroupAddon>
                      <FormControl type="text" />
                      <InputGroupAddon>.00</InputGroupAddon>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroupAddon>
                        <Glyphicon glyph="music" />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

Form.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Form;
