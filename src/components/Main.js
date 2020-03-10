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
                    code: ''
                },
            ]
        };

        this.handleChangeNote = this.handleChangeNote.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }
    handleChangeNote(event) {
        this.setState({
            ...this.state,
            note: event.target.value
        });
    }

    handleChangeCode(event) {
        this.setState({
            ...this.state,
            code: event.target.value
        });
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                note: this.state.note
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
                        <p>Note:</p>
                        <input
                            className = 'Input'
                            type='text'
                            onChange={this.handleChangeNote}

                        />
                    </form>
                    <h3>Code:</h3>
                    <Editor oChange={this.handleChangeCode}/>
                    <button onClick={this.addNote}>Add</button>
                </div>
                <Notes class="notes" notes={notes}  remove={this.removeNote} />

            </div>
        );
    }



}