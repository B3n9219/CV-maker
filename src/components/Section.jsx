import "/src/styles/Section.css"
import Input from "./Input.jsx"
import Card from "./Card.jsx"

import {useState, useEffect} from 'react'



export default function Section({title, type="single", sectionData, setSectionData, inputs}) {
    const [inputData, setInputData] = useState(type==="single"? sectionData: {})
    const [editingIndex, setEditingIndex] = useState(null)
    useEffect(() => {
        if (type === "single") {
            // For single type, update sectionData whenever inputData changes
            setSectionData(inputData);
        }
    }, [inputData]);
    function addInfo() {
        setSectionData(prevData => prevData? [...prevData, inputData] : [inputData])
        console.log("Section data", sectionData)
        setInputData({});
    }
    function updateInfo() {
        setSectionData(prevData => {
            const newData = [...prevData]
            newData[editingIndex] = inputData
            return newData
        })
        setEditingIndex(null)
    }
    function updateInputInfo(name, value) {
        setInputData({...inputData, [name]: value})
    }
    function editCard(cardInfo, key) {
        console.log("CARD INFO", cardInfo)
        setInputData(cardInfo)
        setEditingIndex(key)
    }
    return (
        <div className="section">
            <h2>{title}</h2>
            {inputs.map(input =>
                <Input key={input.name} name={input.name} label={input.label} type={input.type} value={inputData[input.name] || ""}
                       setValue={value => {updateInputInfo(input.name, value)}}/>
            )}
            {type === "multiple" ? (
                editingIndex !== null
                    ? <button type="button" onClick={updateInfo}>Update</button>
                    : <button type="button" onClick={addInfo}>Add</button>
            ) : null}
            {sectionData.length > 0? (
                sectionData.map((item, index) => <Card key={index} id={index} info={item} editCard={editCard} editing={index === editingIndex}/>)
            ) : null}
        </div>

    )
}