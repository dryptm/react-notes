import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function notesentry(notesterm) {
  return (
    <Note
      key={notesterm.key}
      title={notesterm.title}
      content={notesterm.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(notesentry)}
      <Footer />
    </div>
  );
}
export default App;
