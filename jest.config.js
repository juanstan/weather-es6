module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    'transform': {
        "^.+\\.(j)sx?$": "ts-jest"
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
    'moduleFileExtensions': [
        'js',
        'jsx',
        'json',
        'node'
    ]
}