import {Card} from "react-bootstrap";

function Videodetails({video}){
  // console.log(video)
  if (!video) return <div>loading!!!!</div>
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
  // console.log(videosrc)
    return (
        <Card>
        <iframe src={videosrc} style={{height:"400px"}}/>
        <Card.Body>
          <Card.Text>
            <h3>{video.snippet.title}</h3>
            <h4>{video.snippet.channelTitle}</h4>
            <h5>{video.snippet.description}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default Videodetails