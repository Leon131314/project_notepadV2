import React from "react";
import Editor from "../monaco/Editor";
import {codeStyle, linkStyle, editorStyle} from "./Styles";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FaTrash } from 'react-icons/fa'


export default function notes(props) {

    return (
        <div className="Lists">
        <ul className="List-link">{props.notes.map(note => {
                if (note.id !== 0 && note.type === 'link') {
                    return (
                        <div style={linkStyle} key={note.id}>
                            <li><h1 className="Title">{note.title}</h1></li>
                            <li><h3 className="Details-link">{note.note}</h3></li>
                            <Button variant="dark" className="Button-remove" onClick={e => {props.remove(e, note)}}><FaTrash/>
                            </Button>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Open</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1"/>
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
                            <li><h1 className="Title">{note.title}</h1></li>
                            <li><h3 className="Details">{note.note}</h3></li>
                            <Button variant="dark" size="sm" className="Button-remove" onClick={e => {props.removeTest(e, note)}}><FaTrash/></Button>
                            <Editor style={editorStyle}/>
                        </div>
                    )
                }
            }
        )}</ul>
        </div>
    )
}


