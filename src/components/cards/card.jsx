
import { albums } from "../../data/albums.json";
import AlbumCards from "./albumCard";

function Cards() {
  return(
    <>
    {albums.map((albums, index) => {
      return(
        <AlbumCards key={index} albums={albums}/>
      )
    })}
    </>
  )

}

export default Cards