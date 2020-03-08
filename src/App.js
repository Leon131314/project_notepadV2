import React from 'react';
import './App.scss';
import Main from './components/Main';
import Editor from "./monaco/editor";

function App() {
    return (
        <div className="Main">
            <Main/>
            <Editor />
        </div>
    );
}

export default App;
