import Product from "./Product.jsx";

function ProductTab(){
    let style={
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        justifyContent:"center",
        alignItem:"center"
    }
    return (
        <>
        <div style={style}>
            <Product title="Logitech MX master" index={0} />
            <Product title="zebronics keybowrd" index={1}/>
            <Product title="apple pencil" index={2}/>
            <Product title="apple tv" index={3}/>
        </div>
        </>
    )
}
export default ProductTab