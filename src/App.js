import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const OnAddNote = ()=>{
    const newNote = {
      id: uuidv4(),
      title: "Note sans titre",
      body:"Mes notes",
      lastModified: Date.now(),

    };
    setNotes([newNote, ...notes]);

  };
  const OnDeleteNote = (idToDelete)=>{
    setNotes(notes.filter((note) => note.id !== idToDelete ));

  };
  const getActiveNote = () =>{
    return notes.find((note) => note.id === activeNote);

  }
  return (
    <div className="App">
    <Sidebar 
    notes={notes}
     OnAddNote={OnAddNote} 
     OnDeleteNote={OnDeleteNote}
     activeNote={activeNote}
     setActiveNote={setActiveNote} />
    <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
