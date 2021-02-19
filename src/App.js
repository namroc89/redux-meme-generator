import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";

function App() {
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  function add(newMeme) {
    dispatch({ type: "ADD", meme: newMeme });
  }

  function remove(id) {
    dispatch({ type: "REMOVE", id });
  }
  return (
    <div>
      <MemeForm addMeme={add} />
      <MemeList memes={memes} removeMeme={remove} />
    </div>
  );
}

export default App;
