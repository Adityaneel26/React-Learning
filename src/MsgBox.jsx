export default function MsgBox({userName,textColor}){
    let style = {color:textColor}
    return (
        <h1 style={{color:textColor}}>hello, {userName}</h1>
    )
}