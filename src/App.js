import React from 'react';
import './App.scss';
import Main from './components/Main';
import {sectionStyle} from './components/Styles'



function App() {
    return (
        <div style={ sectionStyle }>
                <Main/>
        </div>
    );
}

export default App;
