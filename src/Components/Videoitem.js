import{Container , Row , Col ,Image } from "react-bootstrap" 


function Videoitem({video , onvideoselect}){
    // console.log(video)
    return <Container style={{padding:"10px"}} onClick={()=>onvideoselect(video )}>
        <Row>
            <Col sm={7} style={{cursor:"pointer"}}>
            <Image src={video.snippet.thumbnails.default.url} thumbnail={true}  style={{height:"140px" , width:"300px"}}/> 
            </Col>
            <Col sm={5}>
                <h6>{video.snippet.title} </h6>

            </Col>
        </Row>
    </Container>

}

export default Videoitem