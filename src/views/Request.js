import { useState, useEffect } from "react";
import "react-dates/initialize";
import AdminNavbar from "components/Navbars/AdminNavbar";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Redirect } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
const request = () => {
  const [startDate, setStartDate] = useState("");
  const [startDate1, setStartDate1] = useState("");
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState();
  const [focused, setFocused] = useState();
  const [focusedInput, setFocusedInput] = useState("");
  const [showHour, setShowHour] = useState(false);
  const [showDays, setShowDays] = useState(false);
  const [timeOfDays, setTimeOfDays] = useState("");
  const [timeOfDaysEnd, setTimeOfDaysEnd] = useState("");
  const [departureHour, setDepartureHour] = useState("");
  const [ArrivingHour, setArrivingHour] = useState("");
  const [commentDays, setCommentDays] = useState("");
  const [commentHour, setCommentHour] = useState("");
  const [calculate, setCalculate] = useState(false);
  const [dataDays , setDataDays ] = useState(false)
  const [dataHour, setDataHour] = useState(false);
  useEffect(() => {
    return setStartDate1(startDate);
  });
  console.log(JSON.stringify(startDate1._d));
  console.log(parseFloat(departureHour) - parseFloat(ArrivingHour));
  function selectHandelType() {
    const select = document.querySelector("select");
    if (select.value === "Hour") {
      setShowHour(true);
      setShowDays(false);
    }
    if (select.value === "Days") {
      setShowHour(false);
      setShowDays(true);
    }
  }
  function selectHandelTimes() {
    const selectStart = document.getElementById("timeDays");
    console.log(selectStart.value);
    if (selectStart.value === "All Day") {
      setTimeOfDays(selectStart.value);
    }
    if (selectStart.value === "Afternoon") {
      setTimeOfDays(selectStart.value);
    }
  }
  function selectHandelTimesEnd() {
    const selectEnd = document.getElementById("timeDaysEnd");

    if (selectEnd.value === "All Day") {
      setTimeOfDaysEnd(selectEnd.value);
    }
    if (selectEnd.value === "Morning") {
      setTimeOfDaysEnd(selectEnd.value);
    }
  }

  function onDepartureTimeHandler() {
    const selectDeparture = document.getElementById("departureTime");
    setDepartureHour(selectDeparture.value);
  }
  function onArrivingTimeHandler() {
    const selectArriving = document.getElementById("arrivingTime");
    setArrivingHour(selectArriving.value);
  }
  function onCommentDaysHandler() {
    const selectComment = document.getElementById("commentDays");
    return setCommentDays(selectComment.value);
  }
  function onCommentHourHandler() {
    const selectCommentHour = document.getElementById("commentHour");
    return setCommentHour(selectCommentHour.value);
  }
  function onClickDaysCancel() {
    setTimeOfDays("");

    setTimeOfDaysEnd("");
    setStartDate("");
    setEndDate("");
    setCommentDays("");
  }
  function onClickHourCancel() {
    setCommentHour("");
    setArrivingHour("");
    setDepartureHour("");
    setDate();
    setShowHour("");
    setShowHour(true);
  }
  function onCalculateDaysHandler() {
    setDataDays(true)
    setCalculate(true);
    setShowHour(false);
    setShowDays(false);
  }
  function onCalculateHourHandler() {
        setDataDays(false);
    setCalculate(true);
    setDataHour(true);
    setShowHour(false);
    setShowDays(false);
  }
  return (
    <div>
      {/* <AdminNavbar /> */}

      <Container>
        <Row>
          <Col md="8">
            {!calculate ? (
              <Card style={{ height: 600 }}>
                <Card.Header>
                  <Card.Title as="h4">Absence request</Card.Title>
                </Card.Header>

                <Form>
                  <Col className="pr-12" md="5">
                    <Form.Group>
                      <label>Choose Type</label>
                      <select
                        style={{ width: 500, height: 50 }}
                        onChange={selectHandelType}
                      >
                        <option>---</option>
                        <option value="Hour">Absence per Hour</option>
                        <option value="Days">Absence per Days</option>
                      </select>
                    </Form.Group>
                  </Col>
                  {showHour ? (
                    <div>
                      {" "}
                      <Col className="pr-1" md="5">
                        <label>Choose Date</label>
                        <Form.Group>
                          <SingleDatePicker
                            date={date}
                            onDateChange={(date) => setDate(date)}
                            focused={focused}
                            onFocusChange={({ focused }) => setFocused(focused)}
                            id="date"
                          />
                        </Form.Group>
                      </Col>
                      {/* //////////////////////////////////////  absence per hour  ////////////////////////////////////////////////////*/}
                      {date ? (
                        <Row>
                          <Col className="ml-3 pr-1" md="5">
                            <Form.Group>
                              <label>departure time</label>
                              <select
                                className="form-control"
                                id="departureTime"
                                onChange={onDepartureTimeHandler}
                                name="heure_arrive"
                              >
                                <option
                                  disabled="disabled"
                                  value=""
                                  selected="selected"
                                >
                                  Other
                                </option>
                                <option value="07:00">7h00</option>
                                <option value="07:30">7h30</option>
                                <option value="08:00">8h00</option>
                                <option value="08:30">8h30</option>
                                <option value="09:00">9h00</option>
                                <option value="09:30">9h30</option>
                                <option value="10:00">10h00</option>
                                <option value="10:30">10h30</option>
                                <option value="11:00">11h00</option>
                                <option value="11:30">11h30</option>
                                <option value="12:00">12h00</option>
                                <option value="12:30">12h30</option>
                                <option value="13:00">13h00</option>
                                <option value="13:30">13h30</option>
                                <option value="14:00">14h00</option>
                                <option value="14:30">14h30</option>
                                <option value="15:00">15h00</option>
                                <option value="15:30">15h30</option>
                                <option value="16:00">16h00</option>
                                <option value="16:30">16h30</option>
                                <option value="17:00">17h00</option>
                                <option value="17:30">17h30</option>
                                <option value="18:00">18h00</option>
                                <option value="18:30">18h30</option>
                                <option value="19:00">19h00</option>
                                <option value="19:30">19h30</option>
                                <option value="20:00">20h00</option>
                              </select>
                            </Form.Group>
                          </Col>
                          <Col className="pr-1" md="5">
                            <Form.Group>
                              <label>arriving time</label>
                              <select
                                className="form-control"
                                id="arrivingTime"
                                onChange={onArrivingTimeHandler}
                                name="heure_arrive"
                              >
                                <option
                                  disabled="disabled"
                                  value=""
                                  selected="selected"
                                >
                                  Other
                                </option>
                                <option value="07:00">7h00</option>
                                <option value="07:30">7h30</option>
                                <option value="08:00">8h00</option>
                                <option value="08:30">8h30</option>
                                <option value="09:00">9h00</option>
                                <option value="09:30">9h30</option>
                                <option value="10:00">10h00</option>
                                <option value="10:30">10h30</option>
                                <option value="11:00">11h00</option>
                                <option value="11:30">11h30</option>
                                <option value="12:00">12h00</option>
                                <option value="12:30">12h30</option>
                                <option value="13:00">13h00</option>
                                <option value="13:30">13h30</option>
                                <option value="14:00">14h00</option>
                                <option value="14:30">14h30</option>
                                <option value="15:00">15h00</option>
                                <option value="15:30">15h30</option>
                                <option value="16:00">16h00</option>
                                <option value="16:30">16h30</option>
                                <option value="17:00">17h00</option>
                                <option value="17:30">17h30</option>
                                <option value="18:00">18h00</option>
                                <option value="18:30">18h30</option>
                                <option value="19:00">19h00</option>
                                <option value="19:30">19h30</option>
                                <option value="20:00">20h00</option>
                              </select>
                            </Form.Group>
                          </Col>
                        </Row>
                      ) : null}
                      {departureHour && ArrivingHour ? (
                        <Row>
                          <Col className="ml-3" md="11" sm="12">
                            <Form.Group>
                              <label>Comment</label>
                              <Form.Control
                                cols="50"
                                defaultValue=" "
                                placeholder="Here can be your description"
                                rows="2"
                                as="textarea"
                                id="commentHour"
                                onChange={onCommentHourHandler}
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                      ) : null}
                      {/* <Button
                      className=" mb-5 btn-fill pull-right"
                      type="submit"
                      variant="info"
                     >
                      Submit
                    </Button> */}
                    </div>
                  ) : null}
                  {/*  /////////////////////////////////////////// absence per days    /////////////////////////////////////// */}

                  {showDays ? (
                    <div>
                      {" "}
                      <Row>
                        <Row>
                         <Form.Group
                                className = "mb-3"
                                controlId = "formBasicCheckbox"
                            >
                              <Form.Check
                                type="checkbox"
                              label="Check me out"
                            />
                            </Form.Group>
                          <Col className="ml-3 pr-1" md="5">
                           

                          </Col>
                        </Row>
                        <Col className="ml-3 pr-1" md="5">
                          <Form.Group>
                            <label>Choose Date</label>
                            <DateRangePicker
                              startDate={startDate}
                              startDateId="start-date"
                              endDate={endDate}
                              endDateId="end-date"
                              onDatesChange={({ startDate, endDate }) => {
                                setStartDate(startDate);
                                setEndDate(endDate);
                              }}
                              focusedInput={focusedInput}
                              onFocusChange={(focusedInput) =>
                                setFocusedInput(focusedInput)
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      {startDate ? (
                        <Row>
                          <Col className="ml-4 px-1" md="5">
                            <Form.Group>
                              <label>Departure Date</label>
                              <Form.Control
                                defaultValue={JSON.stringify(startDate._d)}
                                disabled
                                placeholder="..."
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="ml-4 mt-4 pr-1" md="5">
                            <select
                              style={{ width: 150, height: 40, marginTop: 4 }}
                              onChange={selectHandelTimes}
                              id="timeDays"
                            >
                              <option>---</option>
                              <option value="All Day">All Day</option>
                              <option value="Afternoon">Afternoon</option>
                            </select>
                          </Col>
                        </Row>
                      ) : null}
                      {endDate ? (
                        <Row>
                          <Col className="ml-4 px-1" md="5">
                            <Form.Group>
                              <label> END DATE </label>
                              <Form.Control
                                defaultValue={JSON.stringify(endDate._d)}
                                disabled
                                placeholder="..."
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="ml-4 mt-4 pr-1" md="5">
                            <select
                              style={{ width: 150, height: 40, marginTop: 4 }}
                              onChange={selectHandelTimesEnd}
                              id="timeDaysEnd"
                            >
                              {" "}
                              <option>---</option>
                              <option value="All Day">All Day</option>
                              <option value="Morning">Morning</option>
                            </select>
                          </Col>
                        </Row>
                      ) : null}
                      {timeOfDays && timeOfDaysEnd ? (
                        <Row>
                          <Col className="ml-1" md="11" sm="12">
                            <Form.Group>
                              <label>Comment</label>
                              <Form.Control
                                cols="50"
                                defaultValue=" "
                                placeholder="Here can be your description"
                                rows="2"
                                as="textarea"
                                id="commentDays"
                                onChange={onCommentDaysHandler}
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                      ) : null}
                    </div>
                  ) : null}
                </Form>
              </Card>
            ) : (
              //////////////////////////////////////////////////// calculate function  //////////////////////////////////////////////////////////////////
              <Card style={{ height: 200 }}>
                {dataDays ? (
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">Start Date</th>
                        <th className="border-0">Start Time </th>
                        <th className="border-0">End Date</th>
                        <th className="border-0">End Time</th>
                        <th className="border-0">Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {JSON.stringify(startDate._d)} </td>
                        <td>{timeOfDays} </td>
                        <td>{JSON.stringify(endDate._d)}</td>
                        <td>{timeOfDaysEnd}</td>
                        <td>{commentDays}</td>
                      </tr>
                    </tbody>
                  </Table>
                ) : (
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">day of absence </th>
                        <th className="border-0">Start Hour </th>
                        <th className="border-0">End Hour </th>
                        <th className="border-0">comment </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {JSON.stringify(date)} </td>
                        <td>{departureHour} </td>
                        <td>{ArrivingHour}</td>
                        <td>{commentHour}</td>
                      </tr>
                    </tbody>
                  </Table>
                )}

                <Row>
                  <Col className="ml-3" md="12" sm="12">
                    <Button
                      className=" mb-5 btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Submit
                    </Button>
                    <Button
                      className=" ml-5 mb-5 btn-fill pull-right"
                      onClick={(event) => (window.location.href = "request")}
                      variant="danger"
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Card>
            )}
          </Col>
          {/* ////////////////////////////////////////////////////// Display Data ////////////////////////////////////////////////////////////// */}

          {showDays || showHour ? (
            <Col md="4">
              <Card className="card-user">
                <Card.Body>
                  <div>
                    {/* /////////////////////////////////////// display data absence days ///////////////////////////////////////////////////////////// */}

                    {showDays && !showHour ? (
                      <div className="description font-weight-bold">
                        <h4>Absence per Days </h4>
                      </div>
                    ) : null}
                    {startDate && !showHour ? (
                      <div className="description font-weight-bold">
                        <strong> Start Date :</strong>
                        <p>{JSON.stringify(startDate._d)}</p>
                      </div>
                    ) : null}
                    {timeOfDays && !showHour ? (
                      <div className="description font-weight-bold">
                        <strong> Start Time :</strong>
                        <p>{timeOfDays} </p>
                      </div>
                    ) : null}
                    {endDate && !showHour ? (
                      <div className="description font-weight-bold">
                        <strong> End Date :</strong>
                        <p> {JSON.stringify(endDate._d)}</p>
                      </div>
                    ) : null}
                    {timeOfDaysEnd && !showHour ? (
                      <div className="description font-weight-bold">
                        <strong> End Time :</strong>
                        <p> {timeOfDaysEnd} </p>
                      </div>
                    ) : null}
                    {commentDays &&
                    timeOfDaysEnd &&
                    endDate &&
                    timeOfDays &&
                    startDate &&
                    showDays &&
                    !showHour ? (
                      <div className="description font-weight-bold">
                        <strong> comment : </strong> <p> {commentDays} </p>
                        <Button
                          className=" mb-5 btn-fill pull-right"
                          onClick={onCalculateDaysHandler}
                          variant="info"
                        >
                          Calculate
                        </Button>
                        <Button
                          className=" ml-5 mb-5 btn-fill pull-right"
                          onClick={onClickDaysCancel}
                          variant="danger"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : null}
                    {/* /////////////////////////////////////// display data absence hour ///////////////////////////////////////////////////////////// */}

                    {showHour && !showDays ? (
                      <div className="description font-weight-bold">
                        <h4>Absence per Hour </h4>
                      </div>
                    ) : null}
                    {date && !showDays ? (
                      <div className="description font-weight-bold">
                        <strong> day of absence : </strong>
                        <p> {JSON.stringify(date)} </p>
                      </div>
                    ) : null}
                    {departureHour && !showDays ? (
                      <div className="description font-weight-bold">
                        <strong>Start Hour : </strong>
                        <p> {departureHour} </p>
                      </div>
                    ) : null}
                    {ArrivingHour && !showDays ? (
                      <div className="description font-weight-bold">
                        <strong>End Hour : </strong>
                        <p> {ArrivingHour} </p>
                      </div>
                    ) : null}
                    {commentHour &&
                    ArrivingHour &&
                    departureHour &&
                    date &&
                    showHour &&
                    !showDays ? (
                      <div className="description font-weight-bold">
                        <strong> comment : </strong> <p> {commentHour}</p>
                        <Button
                          className=" mb-5 btn-fill pull-right"
                          type="submit"
                          variant="info"
                          onClick={onCalculateHourHandler}
                        >
                          Calculate
                        </Button>
                        <Button
                          className=" ml-5 mb-5 btn-fill pull-right"
                          onClick={onClickHourCancel}
                          variant="danger"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </Card.Body>
                <hr></hr>
              </Card>
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  );
};

export default request;
