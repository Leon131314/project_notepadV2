import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Welcome from "./WelcomeInfo";
import Select from 'react-select';
import {menuStyle} from './Styles'
import Clock from './clock';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    note: '',
                    title: '',
                    type: '',
                    linkCounter: 0,
                    codeCounter: 0,
                    date: ''
                },
            ]
        };

        this.handleChangeNote = this.handleChangeNote.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.removeNoteTest = this.removeNoteTest.bind(this);
        this.linkCounter = this.linkCounter.bind(this);

    }
    handleChangeNote(event) {
        this.setState({
            ...this.state,
            note: event.target.value
        });
    }

    handleChangeTitle(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

    // handleChangeType(event) {
    //     this.setState({
    //         ...this.state,
    //         type: event.target.value
    //     });
    // }

    handleChangeType = (selectedOptions) => {
        this.setState({
            ...this.state,
            type: selectedOptions.value});
    };


    linkCounter() {
        let linkCounter = 1;
        this.state.notes.map(note => {
            if (note.type === 'link') {
                linkCounter ++
            }
            return (
                linkCounter
            )
        })};

    codeCounter =()=> {
        let codeCounter = 0;
        this.state.notes.map(note => {
            if (note.type === 'link') {
                codeCounter ++
            }
            return (
                codeCounter
            )
        })};


    addNote = (e) => {
        const date = new Date().toLocaleString();
        e.preventDefault();
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                note: this.state.note,
                title: this.state.title,
                type: this.state.type,
                date: date
            }])
        });

        console.log(this.state);

        this.linkCounter();
        this.codeCounter();
    };

    removeNote(event, id) {
        const array = [...this.state.notes];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({notes: array});
        this.setState({linkCounter: this.state.linkCounter - 1 })
        this.linkCounter();
    };

    removeNoteTest(event, id) {
        const array = [...this.state.notes];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({notes: array});
    };

    render() {
        const {notes} = this.state;
        const options = [
            { value: 'code', label: 'Code' },
            { value: 'link', label: 'Link' },
        ];

        const style = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        };

        let linkCounter = 0;
        this.state.notes.map(note => {
            if (note.type === 'link') {
                linkCounter ++
            }
            return (
                linkCounter
            )
        });

        let codeCounter = 0;
        this.state.notes.map(note => {
            if (note.type === 'code') {
                codeCounter ++
            }
            return (
                codeCounter
            )
        });

        // let codeCounter = 0;
        // this.state.notes.map(note => {
        //     if (note.type === 'link') {
        //         linkCounter ++
        //     }
        //     return (
        //         codeCounter
        //     )
        // });

        // const clockStyle = {
        //     height: '200px',
        //     color: '#fffff',
        //     width: '200px'
        // }

        // const date = new Date().toLocaleString();

        return (
            <div>
                <Welcome />
                <span className="Counter">
                    <p>links: <b>{linkCounter}</b> </p>
                    <p>snippets: <b>{codeCounter}</b></p>
                </span>
                <div className = "Main" style={menuStyle} >
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="Title" onChange={this.handleChangeTitle} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Details/Tags" onChange={this.handleChangeNote}/>
                            </Col>
                        </Form.Row>
                    </Form>
                    <Select
                        className="mt-1 col-md-4 col-offset-1"
                        style = {style}
                        autoFocus={true}
                        options = {options} value={this.state.notes.type}
                        onChange={this.handleChangeType} />
                    <ButtonToolbar className="CreateBtn">
                    <Button variant="info" size="lg" onClick={this.addNote}>Create</Button>
                    </ButtonToolbar>
                </div>
                <Clock/>
                <Notes class="notes" notes={notes}  remove={this.removeNote} removeTest={this.removeNoteTest}/>
            </div>
        );
    }



}