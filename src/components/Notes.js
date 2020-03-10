import React from "react";
import Editor from "../monaco/Editor";


export default function notes(props) {

        return (
            <ul className="List">{props.notes.map(note => {
                    if (note.id !== 0) {
                                return (
                                    <div>
                                        <li key={note.id}>{note.note}</li>
                                            <button onClick={e => {props.remove(e, note)}}>Remove</button>
                                    </div>
                                )
                        }
                }
            )}</ul>
        )
}


