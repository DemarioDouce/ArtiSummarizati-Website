import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Spinner, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Results = (props) => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const { url, sentenceNumber } =
    (props.location && props.location.state) || {};

  const apiUrl = "http://localhost:5000/api/run";
  const body = {
    url: url,
    sentenceNumber: parseInt(sentenceNumber),
  };
  //runs once after the first rendering of page
  useEffect(() => {
    console.log(url);

    //you need to modify to mmake sure that you are passing parameters to request (could be query parameters or post data)
    const fetchData = async () => {
      axios
        //.get(apiUrl)
        .post(apiUrl, body)
        .then((result) => {
          console.log("result.data:", result.data);
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);
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
            <h1>Summary</h1>
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <ListGroup>
              {data.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </ListGroup>
            <Link to="/register">
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
                GO BACK
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Results;
