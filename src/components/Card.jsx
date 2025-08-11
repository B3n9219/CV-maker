import "/src/styles/Card.css"

export default function Card({info}) {
    return (
        <div className="card">
            {Object.entries(info).map(([key, value]) => (
                <p key={key}>{key + ": " + value}</p>
            ))}
        </div>
    )
}