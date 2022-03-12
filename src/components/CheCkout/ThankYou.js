import { Link } from "react-router-dom"
import '../Css/_thankyou.scss'


export const ThankYou = ({order}) => {

    return <div className="success">
                <h2 className="last">Gracias por tu compra!</h2>
                <hr/>
                <h3 className="codigo">Tu número de orden es: {order}</h3>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
}