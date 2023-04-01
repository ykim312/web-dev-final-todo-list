export default function Input({name, placeholder, type}) {
    return (
        <input
              className="form-input border-none rounded-md"
              type={type}
              name={name}
              placeholder={placeholder}
        />
    )
}