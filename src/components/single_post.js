import React from "react";
import PhotoPost from "./photo_post";
import VideoPost from "./video_post";
import TextPost from "./text_post";
import AudioPost from "./audio_post";
import QuotePost from "./quote_post";
import LinkPost from "./link_post";
import ChatPost from "./chat_post";

function findType(data) {
  switch(data.type) {
    case "text":
      return (<TextPost {...data}/>)
    case "photo":
      return (<PhotoPost {...data}/>)
    case "video":
      return (<VideoPost {...data}/>)
    case "audio":
      return (<AudioPost {...data}/>)
    case "link":
      return (<LinkPost {...data}/>)
    case "quote":
      return (<QuotePost {...data} />)
    case "chat":
      return (<ChatPost {...data}/>)
  }
}

export default (props) => {

    return (
      <div>
        <p>{props.blog_name}</p>
        {findType(props)}
      </div>
    )

}

  
