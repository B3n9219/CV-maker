import { useState } from 'react'
import "/src/styles/Form.css"


export default function Form( {submit, children} ) {
    function submitForm(e) {
        e.preventDefault()
        submit()
    }
    return (
        <form className="form" onSubmit={(e) => submitForm(e)}>
            {children}
            <button type="submit">Submit</button>
        </form>
    )
}