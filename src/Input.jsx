export default function Input({ name, type = "text"}) {
    return (
        <input className="input" name={name} type={type} placeholder={name}/>
    )
}