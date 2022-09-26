import {Form , Button , FormGroup} from "react-bootstrap";
import {useState} from 'react';

function SearchBar({onFormsubmit}){

const[search,setsearchterm]=useState('')

 return  (
 <Form onSubmit={(e)=>{
  e.preventDefault();
  // props.onFormsubmit("srk")
onFormsubmit(search)
 }}>
 <FormGroup className="mb-3">
  <div style={{display:"flex"}}>
 <Form.Control type="text" placeholder="Search...."  value={search} onChange={e=> setsearchterm(e.target.value)}/>
 <Button variant="danger" type="submit">search</Button>
 </div>
</FormGroup>
</Form>
 )

}

export default SearchBar