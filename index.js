'use strice'

let body = document.querySelector('body');

let root = document.createElement('div');
    root.setAttribute('id', 'root');

let textarea = document.createElement('textarea');
    textarea.classList.add('textarea');

let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

let keyboardRowPos1 = document.createElement('div');
    keyboardRowPos1.classList.add('keyboard--row');
    keyboardRowPos1.classList.add(`pos1`);
    keyboard.append(keyboardRowPos1);

let keyboardRowPos2 = document.createElement('div');
    keyboardRowPos2.classList.add('keyboard--row');
    keyboardRowPos2.classList.add(`pos2`);
    keyboard.append(keyboardRowPos2);

let keyboardRowPos3 = document.createElement('div');
    keyboardRowPos3.classList.add('keyboard--row');
    keyboardRowPos3.classList.add(`pos3`);
    keyboard.append(keyboardRowPos3);

let keyboardRowPos4 = document.createElement('div');
    keyboardRowPos4.classList.add('keyboard--row');
    keyboardRowPos4.classList.add(`pos4`);
    keyboard.append(keyboardRowPos4);

let keyboardRowPos5 = document.createElement('div');
    keyboardRowPos5.classList.add('keyboard--row');
    keyboardRowPos5.classList.add(`pos4`);
    keyboard.append(keyboardRowPos5);

class btn {
    constructor(name) {
        this.name = name;
    }
}

class btnRowOne extends btn {
    constructor(name) {
        super(name);
        let div = document.createElement('div');
            div.classList.add('btn--row_one', name);

        let span = document.createElement('span');
            span.classList.add('btn--description');
            span.innerText = name;
            
        div.prepend(span);
        keyboardRowPos1.append(div);
    }
};

class btnRowTwo extends btn {
    constructor(name) {
        super(name);
        let div = document.createElement('div');
            div.classList.add('btn--row_two', name);

        let span = document.createElement('span');
            span.classList.add('btn--description');
            span.innerText = name;
            
        div.prepend(span);
        keyboardRowPos2.append(div);
    }
};

class btnRowThree extends btn {
    constructor(name) {
        super(name);
        let div = document.createElement('div');
            div.classList.add('btn--row_three', name);

        let span = document.createElement('span');
            span.classList.add('btn--description');
            span.innerText = name;
            
        div.prepend(span);
        keyboardRowPos3.append(div);
    }
};

class btnRowFour extends btn {
    constructor(name) {
        super(name);
        let div = document.createElement('div');
            div.classList.add('btn--row_four', name);

        let span = document.createElement('span');
            span.classList.add('btn--description');
            span.innerText = name;
            
        div.prepend(span);
        keyboardRowPos4.append(div);
    }
};

class btnRowFive extends btn {
    constructor(name) {
        super(name);
        let div = document.createElement('div');
            div.classList.add('btn--row_five', name);

        let span = document.createElement('span');
            span.classList.add('btn--description');
            span.innerText = name;
            
        div.prepend(span);
        keyboardRowPos5.append(div);
    }
};



let backQuote = new btnRowOne('`'),
    one = new btnRowOne(1),
    two = new btnRowOne(2),
    three = new btnRowOne(3),
    four = new btnRowOne(4),
    five = new btnRowOne(5),
    six = new btnRowOne(6),
    seven = new btnRowOne(7),
    eight = new btnRowOne(8),
    nine = new btnRowOne(9),
    zero = new btnRowOne(0),
    backspace = new btnRowOne('Backspace');

let tab = new btnRowTwo('Tab'),
    q = new btnRowTwo('q'),
    w = new btnRowTwo('w'),
    e = new btnRowTwo('e'),
    r = new btnRowTwo('r'),
    t = new btnRowTwo('t'),
    y = new btnRowTwo('y'),
    u = new btnRowTwo('u'),
    i = new btnRowTwo('i'),
    o = new btnRowTwo('o'),
    p = new btnRowTwo('p'),
    squareBracket = new btnRowTwo('['),
    reversSquareBracket = new btnRowTwo(']');

let capsColck = new btnRowThree ('CapsLock'),
    a = new btnRowThree ('a'),
    s = new btnRowThree ('s'),
    d = new btnRowThree ('d'),
    f = new btnRowThree ('f'),
    g = new btnRowThree ('g'),
    h = new btnRowThree ('h'),
    j = new btnRowThree ('j'),
    k = new btnRowThree ('k'),
    l = new btnRowThree ('l'),
    doublePoint = new btnRowThree (':'),
    quote = new btnRowThree ("'"),
    enter = new btnRowThree ('Enter');

let shift = new btnRowFour ('Shift'),
    z = new btnRowFour ('z'),
    x = new btnRowFour ('x'),
    c = new btnRowFour ('c'),
    v = new btnRowFour ('v'),
    b = new btnRowFour ('b'),
    n = new btnRowFour ('n'),
    m = new btnRowFour ('m'),
    comma = new btnRowFour (','),
    dot = new btnRowFour ('.'),
    slash = new btnRowFour ('/'),
    arrowUp = new btnRowFour ('▲'),
    rightShift = new btnRowFour ('Shift');

let ctrl = new btnRowFive ('Ctrl'),
    win = new btnRowFive ('Win'),
    alt = new btnRowFive ('Alt'),
    space = new btnRowFive ('Space'),
    altRight = new btnRowFive ('Alt'),
    arrowLeft = new btnRowFive ('◀'),
    arrowDown = new btnRowFive ('▼'),
    arrowRight = new btnRowFive ('▶');


console.log()
root.prepend(textarea, keyboard);
body.prepend(root);


console.log(keyboard)