import Row from './row';

const Table = (props) => {

    const info = props.value;
    const myData = info.map(
        data => <Row key={data.id} value = {data} />
    )

    return(
        <div className="table">
            {myData}  
        </div>
    )
}

export default Table;