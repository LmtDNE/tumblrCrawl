import React from "react";
// sickmainstreamdream

export default (props) => {

  return (

      <div>
        <h1>{props.text}</h1>
        <h3> - {props.source}</h3>
        <p><a href={props.short_url} >Link</a></p>
      </div>

    );
}