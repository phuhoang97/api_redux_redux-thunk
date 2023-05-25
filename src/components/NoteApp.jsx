import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotes, addNote } from "../action";

const NoteApp = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const handleAddNote = () => {
    const newNote = {
      title: "New Note",
      content: "This is a new note.",
    };
    dispatch(addNote(newNote)); // Dispatch action addNote với tham số newNote
  };

  return (
    <div>
      <h1>Note App</h1>
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;
