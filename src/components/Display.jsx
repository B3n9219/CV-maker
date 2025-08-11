export default function Display({data, hidden}) {
    const formattedData = {}
    function formatData () {

    }
    formatData()
    return (
        <div className="display">
            {!hidden? (
                <>
                {data.personalDetails.length > 0? (
                    <>
                        <h2>Personal Information</h2>
                        <h3>{data.personalDetails[0].firstName}</h3>
                        <h3>{data.personalDetails[0].lastName}</h3>
                    </>)
                    : null}
                {data.education.length > 0? (
                    <>
                        <h2>Education</h2>
                        {data.education.map(item => (
                            <>
                                <h3>School Name: {item.schoolName}</h3>
                                <h3>Study Title: {item.studyTitle}</h3>
                                <h3>Study Date: {item.studyDate}</h3>
                            </>)
                        )}
                    </>)
                    : null}
                </>
                )
            : null}
        </div>
    )
}

console.log("HI")