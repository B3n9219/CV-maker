import Form from "./Form.jsx"
import Section from "./Section.jsx"
import Input from "./Input.jsx"


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
