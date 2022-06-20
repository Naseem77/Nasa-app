import React from "react";
import ReactPlayer from 'react-player'
import '../style/media.css'


export default function Media({ data }) {

    return (
        <div id="media-container">
            <div className="title">{data.title}</div>
            {data.media_type === "image" ? (
                <img src={data.url} />) : (
                    <ReactPlayer id="video" url={data.url} />)
            }
            <p className="description">{data.explanation}</p>
        </div>
    )

}