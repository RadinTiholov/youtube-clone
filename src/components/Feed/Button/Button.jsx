export const Button = (props) => {
    return (
        <button className="btn btn-lg selected text-light" name={props.name} type="button" onClick={props.selectGenre} style={{ width: '200px' }}>
            {props.icon}
            {props.name}
        </button>
    )
}