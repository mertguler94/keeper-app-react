import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note, setNote) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
}

  
    function deleteNote(id) {
      setNotes(notes.filter((note,index) => id !== index));
    }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
