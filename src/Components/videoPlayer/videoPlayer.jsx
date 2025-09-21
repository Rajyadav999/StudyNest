import React,{useRef} from 'react'
import './videoPlayer.css'
import video from '../../assets/college-video.mp4'
function Videoplayer({playState,setplayState}){
   const player =useRef(null);
   const closeplayer = (e) =>{
    if (e.target === player.current){
        setplayState(false);
    }
   }
    return (
        <div className = {`video-player ${playState? '':'hide'}`} ref={player} onClick={closeplayer}>
            <video src={video} autoplay muted controls></video>
        </div>
    );
}
export default Videoplayer;