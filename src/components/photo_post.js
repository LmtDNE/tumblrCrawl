import React from "react";

function renderImage(image) {
  return (<img  key={image.original_size.url} src={image.original_size.url} />)
}

export default (props) => {

  return (
      <div>
        <div>{props.photos.map(renderImage)}</div>
        <h5 id={props.id}>{props.summary}</h5>
        <p><a href={props.short_url} target="_blank"  >Link</a></p>
      </div>
    );
}