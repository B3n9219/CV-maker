import { useState } from 'react'
import "/src/styles/Form.css"


export default function Form( {editing, submit, edit, children} ) {
    function submitForm(e) {
        e.preventDefault()
        submit()
    }
    return (
        <form className="form" onSubmit={(e) => submitForm(e)}>
            {editing? (
                <>
                    {children}
                    <button type="submit">Submit</button>
                </>
            ) : <button type="button" onClick={edit}>Edit</button>
            }
        </form>
    )
}