import Card from "react-bootstrap/Card";
import PacmanLoader from "react-spinners/PacmanLoader";
import moment from "moment";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";

export default function NewsArticle({ isLoading, articles }) {
  return isLoading ? (
    <PacmanLoader size={60} />
  ) : articles.length === 0 ? (
    <Alert variant="danger" className="mt-4">
      <Alert.Heading>Aww, snap!</Alert.Heading>
      <h2>&#9785;</h2>
      <h4 className="mb-2 mt-4">There is no matching results... try again !</h4>
    </Alert>
  ) : (
    articles.map((article) => (
      <Accordion defaultActiveKey="0">
        <Card className="mb-2" key={article.created_at_i} border="secondary">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <Card.Body> {article.title || article.story_title}</Card.Body>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Text className="mb-2 text-muted">
              {moment(article.created_at).format("MMM Do YY")}{" "}
              <Card.Link
                className="mb-2 text-muted"
                href={article.url || article.story_url}
                target="_blank"
              >
                Full article
              </Card.Link>
            </Card.Text>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ))
  );
}
