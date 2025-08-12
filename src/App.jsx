import Form from "./components/Form.jsx"
import Section from "./components/Section.jsx"

import Display from "./components/Display.jsx"


import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        "personalDetails": [], "education": [], "practicalExperience": []
        })
    function updateSection(sectionName, newValue) {
        setFormData(prev => {
            let updatedSectionData
            if (typeof newValue === "function") {
                updatedSectionData = newValue(prev[sectionName]);
            } else {
                updatedSectionData = newValue
            }
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
                       inputs = {
                                [{name: "firstName", label: "First name", type:"text"},
                                {name: "lastName", label: "Last name", type:"text"},
                                {name: "email", label: "Email", type:"email"},
                                {name: "phoneNumber", label: "Phone Number", type:"tel"}]} >
                </Section>
                <Section title="Education" type="multiple" sectionData={formData.education}
                         setSectionData={value => updateSection("education", value)}
                         inputs = {
                            [{name: "schoolName", label: "School name", type:"text"},
                             {name: "studyTitle", label: "Title of study", type:"text"},
                             {name: "studyDate", label: "Date of study", type:"text"}]} >
                </Section>
                <Section title="Practical Experience" type="multiple" sectionData={formData.practicalExperience}
                         setSectionData={value => updateSection("practicalExperience", value)}
                         inputs = {
                             [{name: "company", label: "Company name", type:"text"},
                             {name: "position", label: "Position", type:"text"},
                             {name: "responsibilities", label: "Responsibilities you had", type:"text"},
                             {name: "startDate", label: "Start date", type:"date"},
                             {name: "endDate", label: "End date", type:"date"}]} >
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
