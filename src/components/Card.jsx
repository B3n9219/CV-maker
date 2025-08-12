import "/src/styles/Card.css"
import {useState} from "react";

export default function Card({id, info, editCard, editing}) {
    function edit() {
        editCard(info, id)
    }
    return (
        <div className="card">
            {!editing? (
                <>
                    <button onClick={edit}>Edit</button>
                    {Object.entries(info).map(([key, value]) => (
                        <p key={key}>{key + ": " + value}</p>
                    ))}
                </>
            ) : null}
        </div>
    )
}