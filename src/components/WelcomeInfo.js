import React from 'react';
import Button from 'react-bootstrap/button'
import {FaTrash} from 'react-icons/fa'



export default class WelcomeInfo extends React.Component {
        constructor() {
            super();
            this.state = {
                display: 'none',
                instructions: 'show instructions'
            }
        }

        showInfo(){
            this.setState({
                display: this.state.display === 'none' ? 'block' : 'none',
                instructions: this.state.instructions === 'show instructions' ? 'hide instructions' : 'show instructions'
            })
        }


        render() {
            let showStyle = this.state;
            let showInstructions = this.state.instructions
        return (

            <div className="Welcome">
                <h4 className="Welcome-Note"><span id="welcome-header"> Welcome to <span id="logo2">Easy</span><span id="logo">Note</span> </span><br/>
                - notepad app created for saving links and snippets
                </h4>
                <Button variant="outline-info" size="sm" className="ShowBtn" onClick={this.showInfo.bind(this)}>{showInstructions}
                </Button>
                <h5 className="Welcome-Info" style={showStyle}> In order to <b>Create</b> new <b>Note</b>:<br/>
                    1) Enter <b>Title</b> and <b>Details/Tag</b>.<br/>
                    2) Chose <b>Type</b> of note and click <b>Create</b> button.<br/>
                    3) When new box appears, enter your <b>Code</b> / <b>Link</b>.<br/>
                    * To <b>Remove</b> note - click <b><FaTrash/></b> icon in upper right corner of note.</h5>
            </div>
            <
        )
    }
}