import React from 'react';





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
                <h4 className="Welcome-Note"> Welcome to EasyNote - notepad app created
                    for saving major links and code snippets in one place
                    <button onClick={this.showInfo.bind(this)}>{showInstructions}</button>
                </h4>
                <h5 className="Welcome-Info" style={showStyle}> In order to create new Note, enter Title and Details/Tag,
                    chose Type of note and click Create button. When new box appears, enter your code or link.
                    In order to remove Note, click Trash icon in upper right corner of Note</h5>
            </div>
        )
    }
}