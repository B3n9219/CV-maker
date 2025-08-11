export default function Input({ name, label, type = "text", value, setValue}) {

    return (
        <input className="input" name={name} type={type} placeholder={label} value={value} onChange={e => setValue(e.target.value)}/>
    )
}