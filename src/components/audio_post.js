import React from "react";
import Parser from "html-react-parser";

export default (props) => {

  return (

      <div>
        <div>{props.embed ? Parser(props.embed) : "not here"}</div>
        <p><a href={props.short_url} target="_blank" >Link</a></p>
      </div>

    );
}