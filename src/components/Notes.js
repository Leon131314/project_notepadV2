import React from "react";
import Editor from "../monaco/Editor";
import {codeStyle, linkStyle} from "./Styles";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const styles = ({
    height: 300,
    width: 300
});

export default function notes(props) {

    return (
        <div className="Lists">
        <ul className="List-link">{props.notes.map(note => {
                if (note.id !== 0 && note.type === 'link') {
                    return (
                        <div style={linkStyle} key={note.id}>
                            <li>{note.title}</li>
                            <li>{note.note}</li>
                            <button className="Button-remove" onClick={e => {props.remove(e, note)}}>Remove</button>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Open</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>
                        </div>
                    )
                }
            }
        )}</ul>
        <ul className="List-code">{props.notes.map(note => {
                if (note.id !== 0 && note.type === 'code') {
                    return (
                        <div style={codeStyle} key={note.id}>
                            <li>{note.title}</li>
                            <li>{note.note}</li>
                            <button className="Button-remove" onClick={e => {props.remove(e, note)}}>Remove</button>
                            <Editor style={styles}/>
                        </div>
                    )
                }
            }
        )}</ul>
        </div>
    )
}


