import Form from "./components/Form.jsx"
import Section from "./components/Section.jsx"

import Display from "./components/Display.jsx"


import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        "personalDetails": [], "education": []
        })
    function updateSection(sectionName, newValue) {
        setFormData(prev => {
            const updatedSectionData = newValue(prev[sectionName]);
            return { ...prev, [sectionName]: updatedSectionData };
        });
    }
    useEffect(() => {
        console.log("Form updated:", formData);
    }, [formData]);
    const [displayHidden, setDisplayHidden] = useState(true)

    function submitForm() {
        setDisplayHidden(false)
    }

    return (
        <>
            <Form editing={displayHidden} submit={submitForm} edit={() => setDisplayHidden(true)}>
                <Section title="Personal Details" type="single" sectionData={formData.personalDetails}
                       setSectionData={value => updateSection("personalDetails", value)}
                       inputs = {[{name: "firstName", label: "First name", type:"text"},
                                {name: "lastName", label: "Last name", type:"text"}]} >
                </Section>
                <Section title="Education" type="multiple" sectionData={formData.education}
                         setSectionData={value => updateSection("education", value)}
                         inputs = {
                            [{name: "schoolName", label: "School name", type:"text"},
                             {name: "studyTitle", label: "Title of study", type:"text"},
                             {name: "studyDate", label: "Date of study", type:"text"}]} >
                </Section>
            </Form>
            <Display data={formData} hidden={displayHidden}/>

            <div>
                <p>{JSON.stringify(formData, null, 2)}</p>
            </div>
        </>
    )
}

export default App
