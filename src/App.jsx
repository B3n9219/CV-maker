import Form from "./components/Form.jsx"
import Section from "./components/Section.jsx"
import Input from "./components/Input.jsx"


import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
      "personalDetails": null, "education": []
  })
  return (
    <>
      <Form>
          <Section title="Personal Details" initialSectionData={formData.personalDetails} setFormData={() => setFormData}>
              <Input name="First name" />
              <Input name="Last name"/>
          </Section>
          <Section title="Education" initialSectionData={formData.education} setFormData={() => setFormData} type="multiple">
              <Input name="School name"/>
              <Input name="Title of study"/>
              <Input name="Date of study"/>
          </Section>
      </Form>
    </>
  )
}

export default App
