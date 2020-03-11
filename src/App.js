import React from 'react';
import './App.scss';
import Main from './components/Main';
import {sectionStyle} from './components/Styles'
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';


function App() {
    return (
        <div style={ sectionStyle }>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Main/>

        </div>
    );
}

export default App;
