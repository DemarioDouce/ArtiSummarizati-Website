import { Container, Button, Form } from "react-bootstrap";
function App() {
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
            <Form>
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
                  type="text"
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
