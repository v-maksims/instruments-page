export type TInstrumentNote = {
    note: string;
    keyDown: string;
    audio: string;
}

export type TDemoSound = {
    name: string;
    keys: string[];
    delay: number;
}

const PIANO: TInstrumentNote[] = [
    { note: 'a', keyDown: 'z', audio: './Instruments/piano/piano-a.wav' },
    { note: 'bb', keyDown: 's', audio: './Instruments/piano/piano-bb.wav' },
    { note: 'b', keyDown: 'x', audio: './Instruments/piano/piano-b.wav' },
    { note: 'cb', keyDown: 'd', audio: './Instruments/piano/piano-cb.wav' },
    { note: 'c', keyDown: 'c', audio: './Instruments/piano/piano-c.wav' },
    { note: 'd', keyDown: 'v', audio: './Instruments/piano/piano-d.wav' },
    { note: 'eb', keyDown: 'f', audio: './Instruments/piano/piano-eb.wav' },
    { note: 'e', keyDown: 'b', audio: './Instruments/piano/piano-e.wav' },
    { note: 'fb', keyDown: 'g', audio: './Instruments/piano/piano-fb.wav' },
    { note: 'f', keyDown: 'n', audio: './Instruments/piano/piano-f.wav' },
    { note: 'gb', keyDown: 'h', audio: './Instruments/piano/piano-gb.wav' },
    { note: 'g', keyDown: 'm', audio: './Instruments/piano/piano-g.wav' },
];

const GUITAR: TInstrumentNote[] = [
    { note: 'bb', keyDown: 'w', audio: './Instruments/guitar/guitar-bb.wav' },
    { note: 'cb', keyDown: 's', audio: './Instruments/guitar/guitar-cb.wav' },
    { note: 'db', keyDown: 'x', audio: './Instruments/guitar/guitar-db.wav' },
    { note: 'eb', keyDown: 'e', audio: './Instruments/guitar/guitar-eb.wav' },
    { note: 'fb', keyDown: 'd', audio: './Instruments/guitar/guitar-fb.wav' },
    { note: 'gb', keyDown: 'c', audio: './Instruments/guitar/guitar-gb.wav' },
];

const TRIANGLE: TInstrumentNote[] = [
    { note: 'd', keyDown: 'w', audio: './Instruments/triangle/triangle-d.mp3' },
    { note: 'a', keyDown: 'a', audio: './Instruments/triangle/triangle-a.mp3' },
    { note: 'b', keyDown: 's', audio: './Instruments/triangle/triangle-b.mp3' },
    { note: 'c', keyDown: 'd', audio: './Instruments/triangle/triangle-c.mp3' },
];

const PIANO_DEMO_SOUNDS: TDemoSound[] = [
    {
        name: 'tan-tan',
        keys: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        delay: 1000,
    },
    {
        name: 'Tin-tan-ton',
        keys: ['n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 's'],
        delay: 250,
    },
    {
        name: 'medium sound',
        keys: ['c', 'v', 'g', 'f', 'd', 'x', 'c', 'v', 'g', 'f', 'd', 'x', 'n', 'm', 'z'],
        delay: 500,
    },
];

const GUITAR_DEMO_SOUNDS: TDemoSound[] = [
    {
        name: 'ta-ta',
        keys: ['w', 's', 'x', 'e', 'd', 'c'],
        delay: 1000,
    },
    {
        name: 'Some music',
        keys: ['w', 'w', 's', 'x', 'd', 'w', 'w', 's', 'x', 'd', 'w', 'w', 's', 'x', 'd', 'c'],
        delay: 250,
    },
];

const TRIANGLE_DEMO_SOUNDS: TDemoSound[] = [
    {
        name: 'ta-ta',
        keys: ['w', 'a', 's', 'd'],
        delay: 1000,
    },
    {
        name: 'Some music',
        keys: ['w', 'w', 's', 'a', 'd', 'w', 'w', 's', 'a', 'd', 'w'],
        delay: 250,
    },
];

export {
    PIANO,
    GUITAR,
    TRIANGLE,
    PIANO_DEMO_SOUNDS,
    GUITAR_DEMO_SOUNDS,
    TRIANGLE_DEMO_SOUNDS,
};
