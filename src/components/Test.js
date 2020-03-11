import React from "react";
import Editor from "../monaco/Editor";

const styles = ({
    height: 300,
    width: 300
});

export default function notes(props) {

    return (
        <div className="Lists">
        <ul className="List">{props.notes.map(note => {
                if (note.id !== 0 && note.type === 'link') {
                    return (
                        <div style={{width: 200}} key={note.id}>
                            <li>{note.title}</li>
                            <li>{note.note}</li>
                            <button onClick={e => {
                                props.remove(e, note)
                            }}>Remove
                            </button>
                            <div>link</div>
                        </div>
                    )
                }
            }
        )}</ul>
        <ul className="List">{props.notes.map(note => {
                if (note.id !== 0 && note.type === 'code') {
                    return (
                        <div style={{width:200}} key={note.id}>
                            <li >{note.title}</li>
                            <li>{note.note}</li>
                            <button onClick={e => {props.remove(e, note)}}>Remove</button>
                            <Editor style={styles}/>
                        </div>
                    )
                }
            }
        )}</ul>
        </div>
    )
}


