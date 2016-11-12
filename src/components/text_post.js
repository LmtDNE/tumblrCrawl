import React from "react";
import Parser from "html-react-parser";


export default (props) => {

  return (
      <div>
        <h1 id={props.id}>{props.title}</h1>
        <div>{props.body ? Parser(props.body) : props.summary}</div>
        <p><a href={props.short_url}  target="_blank" >Link</a></p>
      </div>
    );
}