import './CounterResetButton.css'

export default function CounterResetButton({resetMethod}) {
    return (
        <div>
            <button className="counterResetButton" 
               onClick={resetMethod}           
           >Reset</button>
        </div>
    )
}