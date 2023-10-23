import Card from "react-bootstrap/Card";

export const Banner = () => {
  return (
    <Card className="text-center py-4 m-5">
      <Card.Title className="mb-4 fs-2">Word Counter</Card.Title>
      <Card.Subtitle className="fs-5 text-muted">
        Paste or type your text here
      </Card.Subtitle>
    </Card>
  );
};