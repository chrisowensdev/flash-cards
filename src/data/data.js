const cardInfo = [
    {
        id: 1,
        question: 'Who is the greatest guitarist ever?',
        answer: {
            summary: 'Slash',
            detail: [],
            keywords: 'slash',
        },
    },
    {
        id: 2,
        question: 'Please explain the various Javascript data types?',
        answer: {
            summary:
                'There are a total of 7 basic data types supported by Javascript. Each one of them is briefed up as followed',
            detail: [
                'Boolean - Represents true and false values',
                'Null - Represents empty, nothing, and unknown type of values',
                'Number - Represents both integer and floating-point values',
                'Object - Used for storing collections of data or more complex entities',
                'String - Represents single-character, multi-character, and alphanumeric values',
                'Symbol - Used for creating unique identifiers for objects',
                'Undefined - Represents value not assigned.  If a variable is only declared and not assigend in JS, then it represents the undefined data type',
            ],
            keywords: [
                'boolen',
                'null',
                'number',
                'object',
                'string',
                'symbol',
                'undefined',
            ],
        },
    },
    {
        id: 3,
        question: 'How far did the Braves go in the playoffs?',
        answer: {
            summary: 'They lost in the NLCS',
            detail: [],
            keywords: ['nlcs', 'third round'],
        },
    },
];

export default cardInfo;
