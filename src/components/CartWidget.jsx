import { CiShoppingCart } from "react-icons/ci";
import "../styles.css"

const CartWidget = () => {
  
    const num = 2
  
    return (
    <div className="contenedorCartWidget">
    <CiShoppingCart className="iconoCarrito"/>
    <p className="numeroCarrito">{num}</p>
    </div>
  )
}

export default CartWidget