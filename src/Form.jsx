function handelFormSubmission(event){
    event.preventDefault()
    console.log("form was submitted")
}
export default function Form(){
    return(
        <form action="">
            <input type="text" placeholder="enter here something" />
            <button onClick={handelFormSubmission}>submit</button>
        </form>
    )
}