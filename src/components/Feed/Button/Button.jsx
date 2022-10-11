export const Button = (props) => {
    return (
        <button className="btn btn-lg selected text-light" to="/" style={{ width: '200px' }}>
            {props.icon}
            {props.name}
        </button>
    )
}