
import Button from "react-bootstrap/Button";
// import Button from ("../Buttons/buttons")
import Card from "react-bootstrap/Card";
import { albums } from "../../data/albums.json";
import "./card.css"
function AlbumCards() {
  console.log(albums);



  
  return (
    <div className="card-container">
      {albums.map((name, index) => {
        console.log("line 13:", name.cover);
        console.log("line 14", index);
        return (
          
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={name.cover} alt="Album Cover" />
            <Card.Body>
              <Card.Title> Album Title: {name.name}</Card.Title>
              <Card.Text>
               Release Date: {name.date}
              </Card.Text>
              <Button   variant="primary">Love</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default AlbumCards;
