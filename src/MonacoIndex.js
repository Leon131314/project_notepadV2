import React from "react";
import { render } from "react-dom";
import Editor from "./monaco/Editor";
import Skeleton from "./monaco/Skeleton";
import Header from "./monaco/Header";
import Panel from "./monaco/Panel";

const didLoad = () => {
    console.log("DidLoad");
};

const didMount = editor => {
    console.log("DidMount", editor);
};

export default function MonacoEditor () {
 return(
    <div>

        <Skeleton panel={<Panel/>}>
            <Header title="Title"/>
            <Editor didLoad={didLoad} didMount={didMount}/>
        </Skeleton>
    </div>
 )
}

