export enum KEY_NUMBER {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9
}

export enum OPERATOR {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = 'x', // '*
    DIVISION = '/',
    EQUALS = '=',
    DOT = '.',
    RESET = 'RESET',
    DELETE = 'DEL',
}

export enum ACTION {
    RESET = 'RESET',
    DELETE = 'DEL',
}

// export type OPERATOR = BASIC_OPERATOR | ACTION

export enum KEY_TYPE {
    NUMBER,
    BASIC,
    ACTION
}

export type Key = {
    name: OPERATOR,
    type: KEY_TYPE
}