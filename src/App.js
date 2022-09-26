import React , {useEffect , useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Videodetails from './Components/Videodetails';
import Videolist from './Components/Videolist';
import {Container, Row ,Col} from 'react-bootstrap';
import Youtube from './api/Youtube';


function App() {
const [videos,setvideos]=useState([])
const [selectedvideo,setselectedvideo]=useState('')
 

const onvideoselect = (vdeo)=>{
  setselectedvideo(vdeo)
}




useEffect(()=>{
  async function submitHandler(){

    const response = await Youtube.get("search",{
      params:{
        part:"snippet",
        maxResults:5,
        key:"AIzaSyDM93hZQkM5QhnLQXVbF7yzbwKmUqJTtsw",
        q:"stand up comedy"
  
      }
    })
    // console.log(response)
    setselectedvideo(response.data.items[0])
    setvideos(response.data.items)
  }
  submitHandler()

},[])

const submithandler1 = async( searchterm )=>{
  const response = await Youtube.get("search",{
    params:{
      part:"snippet",
      maxResults:5,
      key:"AIzaSyDM93hZQkM5QhnLQXVbF7yzbwKmUqJTtsw",
      q:searchterm

    }
  })
  setvideos(response.data.items) 
  setselectedvideo(response.data.items[0]) 
}

  return (
    <Container >
  <SearchBar onFormsubmit={submithandler1}/>
  <Row>
    <Col sm={8}>
  <Videodetails video={selectedvideo} />
  </Col>
  <Col sm={4}>
  <Videolist videos={videos} onvideoselect={onvideoselect}/>
  </Col>
  </Row>
    </Container>
  );
}

export default App;
