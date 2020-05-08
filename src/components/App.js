import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(notesterm => {
        return (
          <Note
            key={notesterm.key}
            title={notesterm.title}
            content={notesterm.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
