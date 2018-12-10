module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    'transform': {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ]
}