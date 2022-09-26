import Videoitem from "./Videoitem"

function Videolist({videos , onvideoselect}){
    // console.log(onvideoselect)
    return (
    <div>
        {videos.map((vid,idx)=> <Videoitem key={idx} video={vid} onvideoselect={onvideoselect}/>)}

    </div>
    )
}

export default Videolist