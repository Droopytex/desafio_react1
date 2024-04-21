import Tags from "../tags/Tags";
import Card from "react-bootstrap/Card";

const MyCard = ({ image, nombre, colorBadge, descripcion, textBadge }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mx-2">
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "180px", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Tags colorBadge={colorBadge} textBadge={textBadge} />
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
