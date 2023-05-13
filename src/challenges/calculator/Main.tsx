import { Display, Header } from './components'
import KeyBoard from './components/KeyBoard'
import './Main.scss'

const Calculator = () => {
    return (
        <div className='calculator-container'>
            <div className='calculator'>
                <Header />
                <Display />
                <KeyBoard />
            </div>
        </div>
    )
}

export default Calculator