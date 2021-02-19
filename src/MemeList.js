import React from "react";
import Meme from "./Meme";

function MemeList({ memes, removeMeme }) {
  if (memes.length > 0) {
    return (
      <div className="MemeList">
        {memes.map((m) => (
          <Meme
            removeMeme={() => removeMeme(m.id)}
            key={m.id}
            topText={m.topText}
            bottomText={m.bottomText}
            imgUrl={m.imgUrl}
          />
        ))}
      </div>
    );
  }
  return <div className="MemeList"></div>;
}

export default MemeList;
