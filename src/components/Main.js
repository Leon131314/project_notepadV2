import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import Editor from '../monaco/Editor'




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

    addNote = () => {
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
        // console.log(array);
        // console.log(event.target);
        // console.log(id);
        const index = array.indexOf(id);
        array.splice(index, 1);
            this.setState({notes: array});
    }

    render() {
        const {notes} = this.state;
        return (
            <div className = "Main">
                <div>
                    <form>
                        <p>Title:</p>
                        <input  className = 'Input' type='text' onChange={this.handleChangeTitle}/>
                        <p>Description:</p>
                        <input  className = 'Input' type='text' onChange={this.handleChangeNote}/>
                        <select value={this.state.type} onChange={this.handleChangeType}>
                            <option value='type'>Type</option>
                            <option value='code'>Code</option>
                            <option value='link'>Link</option>
                        </select>
                    </form>
                    <button onClick={this.addNote}>Create</button>
                </div>
                <Notes class="notes" notes={notes}  remove={this.removeNote}/>
            </div>
        );
    }



}