import React from "react";
import Parser from "html-react-parser";

// sickmainstreamdream
function renderVideo(url) {
 return( <video width="320" height="240" controls src="url" type="video/mp4" ></video>)
};

export default (props) => {
  // console.log("This is props", props)
  // console.log("Inside video", props.player[2].embed_code);
  return (

      <div>
        <h1 id={props.id}>{props.summary}</h1>
        <div>{typeof props.player === "string" ? Parser(props.player[2].embed_code) : "Video Not Available"}</div>
        <p><a href={props.short_url} target="_blank" >Link</a></p>
      </div>

    );
}