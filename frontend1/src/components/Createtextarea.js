import React, { useState } from "react";
import axios from "axios";
export default function Createtextarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  async function submitnote(event) {
    event.preventDefault();
    const temp = JSON.stringify(note);

    props.addNote(note);

    document.querySelector(".form-control").value = "";
    document.querySelector(".title").value = "";
    await axios.post(
      "https://keeper-backend-api5.onrender.com/insertData",
      temp
    );
  }
  return (
    <>
      <form>
        <div className="textarea1">
          <input
            className="title"
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
          <div className="form-floating">
            <textarea
              className="form-control"
              name="content"
              onChange={handleChange}
              rows="15"
              placeholder="Input Content"
              id="floatingTextarea2"
              htmlstyle="height: 100px"
            ></textarea>
          </div>
          <button onClick={submitnote} className="addbutton">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
