import "/src/styles/Section.css"
import Input from "./Input.jsx"
import {useState} from 'react'



export default function Section({title, type="single", sectionData, setSectionData, inputs}) {
    const [inputData, setInputData] = useState({})
    function addInfo() {
        setSectionData(prevData => prevData? [...prevData, inputData] : [inputData])
        setInputData({});
    }
    function updateInputInfo(name, value) {
        setInputData({...inputData, [name]: value})
    }
    return (
        <div className="section">
            <h2>{title}</h2>
            {inputs.map(input =>
                <Input key={input.name} name={input.name} label={input.label} type={input.type} value={inputData[input.name] || ""}
                       setValue={value => updateInputInfo(input.name, value)}/>
            )}
            {type==="multiple"? (
                <button type="button" onClick={addInfo}>Add</button>
            ) : null}
        </div>
    )
}