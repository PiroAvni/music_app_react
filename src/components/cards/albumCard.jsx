import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { albums } from "../../data/albums.json";
import { useState } from "react";

import "./card.css";

function AlbumCards() {
  const [favourite, setFavourite] = useState(false);

  const handleFavorite = (e) => {
    if (favourite === false) {
      setFavourite(prevState => prevState = true);
      e.target.innerText = "Dislike";
    } else {
      setFavourite(prevState => prevState = false);
      e.target.innerText = "Favourite";
    }
  };
  console.log(albums);

  return (
    <div className="card-container">
    
      {albums.map((album, index) => {
        return (
        <Card
          style={{
            width: "18rem",
          }}
          key={index}
        >
          <Card.Img variant="top" src={album.cover} alt="Album Cover" />
          <Card.Body>
            <Card.Title> Album Title: {album.name} </Card.Title>
            <Card.Text>Release Date: {album.date} </Card.Text>
            <Button onClick={handleFavorite} variant="primary">
              Favourite
            </Button>
          </Card.Body>
        </Card>)
      })}
    </div>
  );
}
export default AlbumCards;
