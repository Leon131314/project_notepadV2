import React from "react";



// export default ({notes, removeNote, check}) => (
//
//                     <ul className="List">{notes.map(note =>
//                         <li key={note.id}>{note.task}
//                                 <button onClick={removeNote}>Remove</button>
//                         </li>
//                     )}</ul>
//                 )

export default function notes(props) {

        return (
            <ul className="List">{props.notes.map(note => {
                    if (note.id !== 0) {
                        return (
                            <li key={note.id}>{note.task}
                                <button onClick={() => {
                                    props.removeNote(note)
                                }} key={props.notes.id}>Remove
                                </button>
                            </li>
                        )
                    }
                }
            )}</ul>
        )
}


