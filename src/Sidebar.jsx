function Sidebar({notes, OnAddNote, OnDeleteNote, activeNote, setActiveNote}){
    return(
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={OnAddNote}>Ajouter</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map((note)=>(
                      <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                       onClick={()=> setActiveNote(note.id)} >
                      <div className="app-sidebar-title">
                          <strong>{note.title}</strong>
                          <button onClick={()=>OnDeleteNote(note.id)}>Supprimer</button>
                      </div>
                      <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                      <small className="note-meta">Derniére modification {new Date(note.lastModified).toLocaleDateString("en-GB", {
                          hour : "2-digit",
                          minute : "2-digit",
                      })}</small>
                  </div>

                ))}
              
            </div>

        </div>
    )
}

 export default Sidebar;