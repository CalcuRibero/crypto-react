const Row = (props) => {
    return (
        <div className="row">
            <img className="crypto-logo row-item" src={props.value.image}/>
            <label className="row-item">{props.value.name}</label>
            <label className="row-item">USD ${props.value.current_price}</label>
        </div>
    )
}

export default Row;