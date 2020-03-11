import React from 'react';
import uuid from 'uuid';
import Notes from './Test';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/elemental/less/elemental.less';
// import { FormSelect, Button } from 'elemental'



export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    note: '',
                    title: '',
                    type: 'type'
                },
            ]
        };



        this.handleChangeNote = this.handleChangeNote.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.removeNote = this.removeNote.bind(this);


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

    handleChangeType(event) {
        this.setState({
            ...this.state,
            type: event.target.value
        });
        console.log("target" + event.target.value);
    }

    addNote = (e) => {
        e.preventDefault();
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                note: this.state.note,
                title: this.state.title,
                type: this.state.type
            }])
        });
    };



    removeNote(event, id) {
        const array = [...this.state.notes];
        const index = array.indexOf(id);
        array.splice(index, 1);
            this.setState({notes: array});
    };



    render() {
        const {notes} = this.state;


        return (
            <div>
            <div className = "Main">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Title" onChange={this.handleChangeTitle} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Description" onChange={this.handleChangeNote}/>
                        </Col>
                    </Form.Row>
                </Form>
                <select value={this.state.type} onChange={this.handleChangeType}>
                            <option value='type'>Type</option>
                            <option value='code'>Code</option>
                            <option value='link'>Link</option>
                </select>

                {/*<Select*/}
                {/*    labelId="demo-controlled-open-select-label"*/}
                {/*    id="demo-controlled-open-select"*/}

                {/*    onChange={this.handleChangeType}*/}
                {/*    >*/}
                {/*    <MenuItem value="Type">*/}
                {/*    </MenuItem>*/}
                {/*    <MenuItem value="code">Code</MenuItem>*/}
                {/*    <MenuItem value="link">Link</MenuItem>*/}
                {/*</Select>*/}
                <button onClick={this.addNote}>Create</button>
            </div>
                <Notes class="notes" notes={notes}  remove={this.removeNote}/>

            </div>
        );
    }



}