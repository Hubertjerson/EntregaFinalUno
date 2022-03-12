import { configBtns } from "./configBtns"
import '../Css/_ItemCount.css';

export const ItemCount = ({ max, min = 0, counter, setCounter }) => {

    const handleSumar = (e) => {
        // op lógico AND
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const { configRestar, configSumar } = configBtns(counter, max, min, handleRestar, handleSumar)

    return (
        <div className="container-buton">
            <div className='container-add-substract'>
                <button {...configRestar}  className='container-add-substract'>
                    -
                </button>
                <span className="mx-3">{counter}</span>
                <button {...configSumar}  className='container-add-substract'>
                    +
                </button>
            </div>
        </div>
    )
}