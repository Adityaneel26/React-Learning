import './App.css';
// import Price from './Price';
import "./Product.css"
import Price from './price';
function Product({title,index}){
    let oldprice=["12,452","13,378","83,838","83,382"]
    let newprice=["38,382","92,839","37,237","38,238"]
    let description=[["good product","too good"],["better product","best product"],["best product","greate product"],["ok product","amazing product"]]
    
    return (
        <div className='Product'>
            <h2>{title}</h2>
            <p>Product</p>
            <p>{description[index][0]}</p>
            <p>{description[index][1]}</p>
            <Price oldprice={oldprice[index]} newprice={newprice[index]} />
            </div>
    )
}
export default Product