import React from 'react';

function renderDiaglogue(convo) {
  return(<p><strong>{convo.label}</strong> {convo.phrase}</p>)
}

export default (props) => {

  return (

      <div>
        <h1>{props.title}</h1>
        <div>
          {props.dialogue.map(renderDiaglogue)}
        </div>
        <p><a href={props.short_url} target="_blank" >Link</a></p>
      </div>

    );
}