export default function Price({oldprice,newprice}){
    let oldstyles={
        textDecoration:"line-through",
    }
    let newstyles={
        fontWeight:"bold",
    }
    let styles={
        color:"red",
        backgroudColor:""
    }
    return (
        <div>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp; &nbsp;
            <span style={newstyles}>{newprice}</span>
        </div>
    )
}