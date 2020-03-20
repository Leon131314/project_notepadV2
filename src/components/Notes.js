import React from "react";
import Editor from "../monaco/Editor";
import {codeStyle, linkStyle, editorStyle, linkTags, codeTags, linkTagTitle, codeTagTitle} from "./Styles";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FaTrash } from 'react-icons/fa'
import Tags from './TAgs';

export default class notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Lists">
                <ul className="List-link">{this.props.notes.map(note => {
                        if (note.id !== 0 && note.type === 'link') {
                            return (
                                <div style={linkStyle} key={note.id}>
                                    <li><h1 className="Title">{note.title}</h1></li>
                                    <li><h3 className="Details-link">{note.note}</h3></li>
                                    <li><h4 className="CreationDate">created: {note.date}</h4> </li>
                                    <Button variant="dark" className="Button-remove" onClick={e => {
                                        this.props.remove(e, note)
                                    }}><FaTrash/>
                                    </Button>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <Button variant="outline-secondary" onClick={e => {
                                                this.props.open(e, note)
                                            }}>Open</Button>
                                        </InputGroup.Prepend>
                                        <FormControl aria-describedby="basic-addon1" onChange={e => {
                                            this.props.handleChangeLink(e, note)
                                        }}/>
                                    </InputGroup>
                                    {/*<button onClick={this.props.handleSave}> save</button>*/}
                                    <h4 style={linkTagTitle}>Tags:</h4>
                                    <div style={linkTags}> <Tags /> </div>
                                </div>
                            )
                        }
                    }
                )}</ul>
                <ul className="List-code">{this.props.notes.map(note => {
                        if (note.id !== 0 && note.type === 'code') {
                            return (
                                <div style={codeStyle} key={note.id}>
                                    <li><h1 className="TitleCode">{note.title}</h1></li>
                                    <li><h3 className="Details-Code">{note.note}</h3></li>
                                    <li><h4 className="CreationDate">created: {note.date}</h4> </li>
                                    <Button variant="dark" size="sm" className="Button-remove" onClick={e => {
                                        this.props.removeTest(e, note)
                                    }}><FaTrash/></Button>
                                    <Editor style={editorStyle}/>
                                    <h4 style={codeTagTitle}>Tags:</h4>
                                    <div style={codeTags}> <Tags /> </div>
                                </div>
                            )
                        }
                    }
                )}</ul>
            </div>
        )
    }
}