import { Key, KEY_NUMBER, KEY_TYPE, OPERATOR } from "../types"

interface Props {
}

const keyboard: any = [
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.EIGHT, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.NINE, type: KEY_TYPE.NUMBER },
    { name: OPERATOR.DELETE, type: KEY_TYPE.ACTION },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
    { name: KEY_NUMBER.SEVEN, type: KEY_TYPE.NUMBER },
]

const KeyBoard: React.FC<Props> = () => {
    return (
        <div>Hello</div>
    )
}

export default KeyBoard