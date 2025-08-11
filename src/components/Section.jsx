import "/src/styles/Section.css"
import {Children, cloneElement, useState} from 'react'



export default function Section({title, type="single", initialSectionData, setFormData, children}) {
    const [sectionData, setSectionData] = useState(initialSectionData)
    console.log(sectionData)
    function addInfo() {
        if (type==="multiple") {
            setSectionData()
        }
        setFormData = [...setFormData, ...sectionData]
    }
    const handleInputChange = (name, value) => {
        console.log('changed', e.target.name, e.target.value);
        setSectionData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Clone each child Input, adding value and onChange
    const childrenWithProps = Children.map(children, child => {
        // Only clone if it has a "name" prop (assume Input components)
        if (!child.props.name) {
            return child
        }
        return cloneElement(child, {onChange: e => handleInputChange(e.target.name, e.target.value)});
    });
    return (
        <div className="section">
            <h2>{title}</h2>
            {childrenWithProps}
            {type==="multiple"? (
                <button onClick={() => addInfo()}>Add</button>
            ) : null}
        </div>
    )
}