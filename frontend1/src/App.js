import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
// import Footer from './components/Footer';
import Note from "./components/Note";
import Createtextarea from "./components/Createtextarea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }
  useEffect(() => {
    async function getData() {
      axios
        .get("https://keeper-backend-api5.onrender.com/data")
        .then((data) => setNotes(data.data));
    }
    getData();
  }, []);
  // useEffect(() => {
  //   async function getData() {
  //     fetch("http://localhost:3000/data")
  //       .then((res) => res.json())
  //       .then((data) => setNotes(data));
  //   }
  //   getData();
  // }, []);

  // useEffect(async () => {

  // }, []);
  // useEffect(() => {
  //   const temp = axios.get("/data");
  //   console.log(temp);
  // }, []);

  function deleteNote(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        if (index === id) {
          console.log(noteItem._id);
          axios.delete(
            `https://keeper-backend-api5.onrender.com/data/${noteItem._id}`
          );
        }
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Createtextarea addNote={addNote} />
      </div>
      {notes.map((noteitem, index) => {
        return (
          <Note
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
            key={index}
            id={index}
          />
        );
      })}
    </>
  );
}

export default App;
