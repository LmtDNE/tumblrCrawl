import React from "react";
import Parser from "html-react-parser";

export default (props) => {

  return (
      <div>
        <a href={props.url} >
          <div>
            <h5>{props.publisher}</h5>
            <h1>{props.title}</h1>
            <p>{props.excerpt}</p>
          </div>
        </a>
        {Parser(props.description)}
        <p><a href={props.short_url} target="_blank" >Link</a></p>
      </div>

    );
}