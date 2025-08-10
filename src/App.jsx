import Form from "./components/Form.jsx"
import Section from "./components/Section.jsx"
import Input from "./components/Input.jsx"


import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Form>
          <Section title="Personal Details">
              <Input name="First name"/>
          </Section>
      </Form>
    </>
  )
}

export default App
