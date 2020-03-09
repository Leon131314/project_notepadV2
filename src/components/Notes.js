import React from "react";


export default function notes(props) {

        return (
            <ul className="List">{props.notes.map(note => {
                    if (note.id !== 0) {
                                return (
                                    <li key={note.id}>{note.task}
                                            <button onClick={e => {
                                                    props.remove(e, note)
                                                    console.log(e.target)
                                                    console.log(note.id)
                                            }}>Remove
                                            </button>
                                    </li>

                                )
                        }
                }
            )}</ul>
        )
}


