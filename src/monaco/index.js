import React from "react";
import { render } from "react-dom";
import Editor from "./components/Editor";
import Skeleton from "./components/Skeleton";
import Header from "./components/Header";
import Panel from "./components/Panel";

const didLoad = () => {
    console.log("DidLoad");
};

const didMount = editor => {
    console.log("DidMount", editor);
};

const App = () =>
    <div>
        <h2>
            Start editingdasd some magic happen {"\u2728"}
        </h2>
        <Skeleton panel={<Panel />}>
            <Header title="Sandbox" />
            <Editor didLoad={didLoad} didMount={didMount} />
        </Skeleton>
    </div>;

render(<App />, document.getElementById("root"));
