import React from 'react';

function renderTypeImage(type) {
  switch(type) {
    case "text":
      return (<img src="/style/images/text.jpg"/>)
    case "photo":
      return (<img src="/style/images/photo.jpg"/>)
    case "video":
      return (<img src="/style/images/video.jpg"/>)
    case "audio":
      return (<img src="/style/images/audio.jpg"/>)
    case "link":
      return (<img src="/style/images/link.jpg"/>)
    case "quote":
      return (<img src="/style/images/quote.jpg"/>)
    case "chat":
      return (<img src="/style/images/chat.jpg"/>)
  }

}

export default (props) => {
  console.log("This is props inside new fav post component", props);
  return (
      <div>
        {renderTypeImage(props.type)}
        <h5>{props.blog_name}</h5>
        <a href={props.short_url} target="_blank">LINK</a>
      </div>
    );
}