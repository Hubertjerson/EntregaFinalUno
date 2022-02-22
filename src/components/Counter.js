import React, { useState } from 'react'
import '../components/Counter.css';

const Counter = () => {

    const [counter, setCounter] = useState(1)

    const Incrementar = () => {

        setCounter(counter + 1)
    }

    const Disminuir = () => {
        if(counter > 1 ){
            setCounter(counter - 1)
        }else{
            alert('Error')
        }
    }

    return (
        <div className="container-buton">
            <div className="container-add-substract">
                <button className='container-add-substract' onClick={Incrementar}>+</button>
                <div>{counter}</div>
                <button className='container-add-substract' onClick={Disminuir}>-</button>
            </div>
        </div>
    )
}

export default Counter