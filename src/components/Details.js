import video from "../data/video.js"
import Votes from "./Votes"


function Details({ video }) {
  return (
  <div>
    <h1>{video.title}</h1>
    <p>{video.views} Views | Updated{video.createdAt} </p>

    <h2>Comments</h2>

    </div>
  )
}

export default Details;