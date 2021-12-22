import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);
  useEffect(()=>{

    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const OnAddNote = ()=>{
    const newNote = {
      id: uuidv4(),
      title: "Note sans titre",
      body:"",
      lastModified: Date.now(),

    };
    setNotes([newNote, ...notes]);

  };
  const OnDeleteNote = (idToDelete)=>{
    setNotes(notes.filter((note) => note.id !== idToDelete ));

  };
  const OnUpdateNote = (updatedNote)=>{
    const updateNotesArray = notes.map((note)=>{
      if(note.id === activeNote)
      {
        return updatedNote;
      }
      return note;
    });
    setNotes(updateNotesArray);

  };
  // help fonction
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
    <Main 
      activeNote={getActiveNote()} 
      OnUpdateNote={OnUpdateNote}
    />
    </div>
  );
}

export default App;
