import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
function App(props) {
  const [state, setState] = useState({
    url: "",
    sentenceNumber: 0,
  });
  //
  const apiUrl = "http://localhost:5000/processNLP";
  //
  const handleOnSubmit = (event) => {
    event.preventDefault();
    //
    const data = {
      url: state.url,
      sentenceNumber: state.sentenceNumber,
    };
    console.log(data);
    axios
      .post(apiUrl, data)
      .then((result) => {
        console.log(result.data);
        props.history.push({
          pathname: "/results",
          state,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  const onChange = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //
  return (
    <>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            <h1>ArtiSummarizati</h1>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  name="url"
                  id="url"
                  placeholder="URL"
                  type="text"
                  value={state.url}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "30%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  name="sentenceNumber"
                  id="sentenceNumber"
                  placeholder="# of sentences"
                  type="number"
                  value={state.sentenceNumber}
                  onChange={onChange}
                />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                variant="primary"
                type="submit"
              >
                SUMMARIZE
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
