import { useState } from "react";
import "./app.scss";
import ThinTemplate from "./templates/ThinTemplate/thin-template";
import ReactMarkdown from "react-markdown";
import objective from "./objective.js";
import rehypeRaw from "rehype-raw";

const options = [
    { value: null, label: "All" },
    { value: 100, label: "$100" },
    { value: 200, label: "$200" },
    { value: 300, label: "$300" },
    { value: 400, label: "$400" },
    { value: 500, label: "$500" },
];

function App() {
    // const [selected, setSelected] = useState([]);

    return (
        <ThinTemplate instructionTitle="Front-end Interview">
            <div class="options">
                {options.map((option) => (
                    <button type="button" key={option.value}>
                        {option.label}
                    </button>
                ))}
            </div>

            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="markdown" children={objective} />

            {/* <h2>Selected State</h2>
            <pre>{JSON.stringify(selected, null, 2)}</pre> */}
        </ThinTemplate>
    );
}

export default App;
