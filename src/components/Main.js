import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    task: ''
                },
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            task: event.target.value
        });


    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: this.state.task
            }])
        });
    };

    removeNote(note) {
        console.log('xx');
        this.setState(prevState => ({
            notes: prevState.notes.filter(el => el !== note)
        }));
    };


    render() {

        const {notes} = this.state;
        const {check} = this.state.notes;
        // const {remove} = this.testNote();
        return (
            <div className = "Main">
                <div>
                    <form>
                        <p>Note:</p>
                        <input
                            className = 'Input'
                            type='text'
                            onChange={this.handleChange}

                        />
                    </form>
                    <button onClick={this.addNote}>Add</button>
                </div>
                {/*<Notes class="notes" notes={notes} removeNote={this.removeNote} check={check} />*/}
                <Notes class="notes" notes={notes} removeNote={this.removeNote} check={check} />

            </div>
        );
    }



}