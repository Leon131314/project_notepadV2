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
                    codeCounter: 0
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
        console.log(selectedOptions)
    }


    linkCounter() {
        let linkCounter = 0;
        const test = this.state.notes.map(note => {
            if (note.type === 'link') {
                linkCounter ++
            }
            return (
                linkCounter
            )
        })
        console.log(linkCounter)
    }


    addNote = (e) => {
        e.preventDefault();
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                note: this.state.note,
                title: this.state.title,
                type: this.state.type,
                // linkCounter: this.state.type === 'link' ? `${this.state.linkCounter + 1}` : `${this.state.linkCounter + 0}`
            }])
        });
        this.linkCounter();
        // console.log(this.state.notes.linkCounter);
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

        return (
            <div>
                <div className = "Main">
                        <Welcome />
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
                    <Button onClick={this.linkCounter}>test</Button>
                    {/*<select value={this.state.notes.type} onChange={this.handleChangeType}>*/}
                    {/*    <option value='type'>Type</option>*/}
                    {/*    <option value='code'>Code</option>*/}
                    {/*    <option value='link'>Link</option>*/}
                    {/*</select>*/}
                    {/*<SelectType />*/}
                    <div className="container">
                    <Select
                        className="mt-2 col-md-2 col-offset-2"
                        style = {style}
                        autoFocus={true}
                        options = {options} value={this.state.notes.type}
                        onChange={this.handleChangeType} />
                    </div>
                    <ButtonToolbar className="CreateBtn">
                    <Button variant="info" size="lg" onClick={this.addNote}>Create</Button>
                    </ButtonToolbar>
                </div>
                <Notes class="notes" notes={notes}  remove={this.removeNote} removeTest={this.removeNoteTest}/>
            </div>
        );
    }



}