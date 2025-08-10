export default function Input({ name, type = "text"}) {
    return (
        <input name={name} type={type} placeholder={name}/>
    )
}