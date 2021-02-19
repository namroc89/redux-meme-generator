import React from "react";
import "./Meme.css";

function Meme({ removeMeme, topText, bottomText, imgUrl, id }) {
  function handleDelete() {
    console.log(id);
    removeMeme(id);
  }
  return (
    <div>
      <div className="Meme">
        <span className="top-text">{topText}</span>
        <img src={imgUrl} />
        <span className="bottom-text">{bottomText}</span>
        <button id="remove-btn" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Meme;
