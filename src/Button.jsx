function doSomething() {
    console.log("hello world")
}
function bye(){
    console.log("bye this is end")
}
export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>click me</button>
            <p onMouseOver={bye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus necessitatibus minus, consequatur eligendi porro pariatur sit doloremque id sequi deserunt a magni.</p>
        </div>
    )
}