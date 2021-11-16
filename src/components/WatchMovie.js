import React from 'react'
import {useParams,useLocation} from 'react-router-dom'

function WatchMovie(props) {
    let query=new URLSearchParams(useLocation().search);
    let {id,name}=useParams()
    document.title=name.replace(/-/g, ' ')
    const iframeStyle={
        border:"0px",
        width:"100%",
        height:"100vh",
        display:"block",
        margin:"0px",
        padding:"0px",
    }
    const iframe={
        width:"100%",
        height:"100vh",
        position:"relative",
        margin:"0px",
        padding:"0px",
        overflow:"hidden",
        display:"inline-block"
    }
    return(
        <div style={iframe} className='d-flex justify-content-center align-items-center'>
            <iframe id="watch" style={iframeStyle} webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src={"https://www.2embed.ru/embed/"+(query.get("source") && query.get("source")==="1"?"imdb/movie?id=tt":"tmdb/movie?id=")+id} title={id}></iframe>
        </div>
    )
}
export default WatchMovie