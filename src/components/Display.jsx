import "/src/styles/Display.css"

export default function Display({data, hidden}) {
    console.log("PD", data.personalDetails)
    return (
        <div className="display">
            {!hidden? (
                <>
                {data.personalDetails && Object.keys(data.personalDetails).length > 0? (
                    <div class="personal">
                        <h2>Personal Information</h2>
                        <h3>{data.personalDetails.firstName + " " + data.personalDetails.lastName}</h3>
                        <ul>
                            <li>Email: {data.personalDetails.email}</li>
                            <li>Phone Number: {data.personalDetails.phoneNumber}</li>
                        </ul>
                    </div>)
                    : null}
                    {data.education.length > 0? (
                    <div class="education">
                        <h2>Education</h2>
                        <ol>
                            {data.education.map(item => (
                                <li>
                                    <h3>{item.schoolName}</h3>
                                    <ul>
                                        <li>Study Title: {item.studyTitle}</li>
                                        <li>Study Date: {item.studyDate}</li>
                                    </ul>
                                </li>)
                            )}
                        </ol>
                    </div>)
                    : null}
                    {data.practicalExperience.length > 0? (
                            <div class="practical">
                                <h2>Practical Experience</h2>
                                <ol>
                                {data.practicalExperience.map(item => (
                                    <li>
                                        <h3>{item.company}</h3>
                                        <ul>
                                            <li>Position: {item.position}</li>
                                            <li>Responsibilities: {item.responsibilities}</li>
                                            <li>Start Date: {item.startDate}</li>
                                            <li>End Date: {item.endDate}</li>
                                        </ul>
                                    </li>)
                                )}
                                </ol>
                            </div>)
                        : null}
                </>
                )
            : null}
        </div>
    )
}

console.log("HI")