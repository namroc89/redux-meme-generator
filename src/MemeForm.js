import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function MemeForm({ addMeme }) {
  const [form, setForm] = useState({ imgUrl: "", topText: "", bottomText: "" });

  function handleSubmit(e) {
    e.preventDefault();
    addMeme({ ...form, id: uuid() });
    setForm({ imgUrl: "", topText: "", bottomText: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imgUrl">Image URL</label>
        <input
          type="text"
          name="imgUrl"
          id="formUrl"
          onChange={handleChange}
          value={form.imgUrl}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="formTopText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="formBottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="form-btn">
          Create Meme
        </button>
      </form>
    </div>
  );
}

export default MemeForm;
