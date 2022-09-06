import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea"

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(preNotes => {
            return ([...preNotes, newNote]);
        });   
    }
    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => (
            <Note
                id = {index}
                key = {index} 
                title = {noteItem.title} 
                content = {noteItem.content}
                onDelete = {deleteNote} />
))} 
        <Footer/>
    </div>);
}

export default App;