const LoadTable = (props)=>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.country}</td>
            <td>{props.cCode}</td>
            <td>{props.web}</td>
          </tr>
    );
}

export default LoadTable;