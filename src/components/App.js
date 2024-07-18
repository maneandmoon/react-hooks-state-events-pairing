import video from "../data/video.js";
import Comments from "./Comments.js";
import Votes from "./Votes.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      
        <h1> {video.title} </h1>
        <p>{video.views} views</p>
        <Votes upvotes={video.upvotes} downvotes={video.downvotes} />
        <p>Uploaded: {video.createdAt}</p>
        <h2>Comments</h2>
      {
        video.comments.map(curComment => <Comments curComment={curComment}/>)
      }


   
    </div>


  );
}

export default App;
