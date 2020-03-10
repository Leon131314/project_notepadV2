import React from "react";
import Editor from "../monaco/Editor";

const styles = ({
        height: 300,
        width: 300
});

export default function notes(props) {
        return (
            <ul className="List">{props.notes.map(note => {
                    if (note.id !== 0) {
                                return (
                                    <div style={{width:200}} key={note.id}>
                                        <li >{note.note}
                                            {note.code}</li>
                                            <button onClick={e => {props.remove(e, note)}}>Remove</button>
                                            <Editor style={styles}/>
                                    </div>
                                )
                        }
                }
            )}</ul>
        )
}


