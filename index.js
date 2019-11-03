'use strice'

let body = document.querySelector('body');

let root = document.createElement('div');
    root.setAttribute('id', 'root');

let textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.value = '';

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
    keyboardRowPos5.classList.add(`pos5`);
    keyboard.append(keyboardRowPos5);


let pressShift = false;
let pressCapsLock = false;
let alterText = false;
let upperCase = false;

class btn {
    constructor(code, EnCharCode, RuCharCode) {
        this.code = code;
        this.EnCharCode = EnCharCode;
        this.RuCharCode = RuCharCode;
    }
}

class btnRowOne extends btn {
    constructor(code, EnCharCode, RuCharCode) {
        super(code, EnCharCode, RuCharCode);

        if(EnCharCode == undefined) {
            let div = document.createElement('div');
            div.classList.add('special--btn', code);
            div.innerHTML = `${code}`
            keyboardRowPos1.append(div);
        } else {
            let div = document.createElement('div');
            div.classList.add('btn', code);
            div.setAttribute('data-EnCharCode', EnCharCode);
            div.setAttribute('data-RuCharCode', RuCharCode)
            div.innerHTML = `${String.fromCharCode(EnCharCode)}`
            keyboardRowPos1.append(div);
        }
    }
};
class btnRowTwo extends btn {
    constructor(code, EnCharCode, RuCharCode) {
        super(code, EnCharCode, RuCharCode);

        if(EnCharCode == undefined) {
            let div = document.createElement('div');
            div.classList.add('special--btn', code);
            div.innerHTML = `${code}`
            keyboardRowPos2.append(div);
        } else {
            let div = document.createElement('div');
            div.classList.add('btn', code);
            div.setAttribute('data-EnCharCode', EnCharCode);
            div.setAttribute('data-RuCharCode', RuCharCode)
            div.innerHTML = `${String.fromCharCode(EnCharCode)}`
            keyboardRowPos2.append(div);
        }
    }
};

class btnRowThree extends btn {
    constructor(code, EnCharCode, RuCharCode) {
        super(code, EnCharCode, RuCharCode);

        if(EnCharCode == undefined) {
            let div = document.createElement('div');
            div.classList.add('special--btn', code);
            div.innerHTML = `${code}`
            keyboardRowPos3.append(div);
        } else {
            let div = document.createElement('div');
            div.classList.add('btn', code);
            div.setAttribute('data-EnCharCode', EnCharCode);
            div.setAttribute('data-RuCharCode', RuCharCode)
            div.innerHTML = `${String.fromCharCode(EnCharCode)}`
            keyboardRowPos3.append(div);
        }
    }

};

class btnRowFour extends btn {
    constructor(code, EnCharCode, RuCharCode) {
        super(code, EnCharCode, RuCharCode);

        if(EnCharCode == undefined) {
            let div = document.createElement('div');
            div.classList.add('special--btn', code);
            div.innerHTML = `${code}`
            keyboardRowPos4.append(div);
        } else {
            let div = document.createElement('div');
            div.classList.add('btn', code);
            div.setAttribute('data-EnCharCode', EnCharCode);
            div.setAttribute('data-RuCharCode', RuCharCode)
            div.innerHTML = `${String.fromCharCode(EnCharCode)}`
            keyboardRowPos4.append(div);
        }
    }
};

class btnRowFive extends btn {
    constructor(code, EnCharCode, RuCharCode) {
        super(code, EnCharCode, RuCharCode);

        if(EnCharCode == undefined) {
            let div = document.createElement('div');
            div.classList.add('btn', code,);
            div.innerHTML = `${code}`
            keyboardRowPos5.append(div);
        } else {
            let div = document.createElement('div');
            div.classList.add('btn', code);
            div.setAttribute('data-EnCharCode', EnCharCode);
            div.setAttribute('data-RuCharCode', RuCharCode)
            div.innerHTML = `${String.fromCharCode(EnCharCode)}`
            keyboardRowPos5.append(div);
        }
    }
};



let backQuote = new btnRowOne('Backquote', 96, 1105),
    one = new btnRowOne('Digit1', 49, 33),
    two = new btnRowOne('Digit2', 50, 64),
    three = new btnRowOne('Digit3', 51, 35),
    four = new btnRowOne('Digit4', 52, 36),
    five = new btnRowOne('Digit5', 53, 37),
    six = new btnRowOne('Digit6', 54, 94),
    seven = new btnRowOne('Digit7', 55, 38),
    eight = new btnRowOne('Digit8', 56, 42),
    nine = new btnRowOne('Digit9', 57, 40),
    zero = new btnRowOne('Digit0', 48, 41),
    minus = new btnRowOne('Minus', 45, 95),
    equal = new btnRowOne('Equal', 61, 43),
    backspace = new btnRowOne('Backspace');

let tab = new btnRowTwo('Tab'),
    q = new btnRowTwo('KeyQ', 113, 1081),
    w = new btnRowTwo('KeyW', 119, 1094),
    e = new btnRowTwo('KeyE', 101, 1091),
    r = new btnRowTwo('KeyR', 114, 1082),
    t = new btnRowTwo('KeyT', 116, 1077),
    y = new btnRowTwo('KeyY', 121, 1085),
    u = new btnRowTwo('KeyU', 117, 1075),
    i = new btnRowTwo('KeyI', 105, 1096),
    o = new btnRowTwo('KeyO', 111, 1097),
    p = new btnRowTwo('KeyP', 112, 1079),
    bracketLeft = new btnRowTwo('BracketLeft', 91, 1093),
    bracketRight  = new btnRowTwo('BracketRight', 93, 1098);

let capsColck = new btnRowThree ('CapsLock'),
    a = new btnRowThree ('KeyA', 97, 1092),
    s = new btnRowThree ('KeyS', 115, 1099),
    d = new btnRowThree ('KeyD', 100, 1074),
    f = new btnRowThree ('KeyF', 102, 1072),
    g = new btnRowThree ('KeyG', 103, 1087),
    h = new btnRowThree ('KeyH', 104, 1088),
    j = new btnRowThree ('KeyJ', 106, 1086),
    k = new btnRowThree ('KeyK', 107, 1083),
    l = new btnRowThree ('KeyL', 108, 1076),
    semicolon = new btnRowThree ('Semicolon', 59, 1078),
    quote = new btnRowThree ('Quote', 39, 1101),
    enter = new btnRowThree ('Enter');

let shiftLeft = new btnRowFour ('Shift'),
    z = new btnRowFour ('KeyZ', 122, 1103),
    x = new btnRowFour ('KeyX', 120, 1095),
    c = new btnRowFour ('KeyC', 99, 1089),
    v = new btnRowFour ('KeyV', 118, 1084),
    b = new btnRowFour ('KeyB', 98, 1080),
    n = new btnRowFour ('KeyN', 110, 1090),
    m = new btnRowFour ('KeyM', 109, 1100),
    comma = new btnRowFour ('Comma', 44, 1073),
    period  = new btnRowFour ('Period', 46, 1102),
    slash  = new btnRowFour ('Slash', 47, 46),
    arrowUp = new btnRowFour ('▲'),
    shiftRight = new btnRowFour ('Shift');

let controlLeft  = new btnRowFive ('Ctrl'),
    win = new btnRowFive ('Win',),
    altLeft  = new btnRowFive ('Alt'),
    space = new btnRowFive ('Space'),
    altRight = new btnRowFive ('Alt'),
    arrowLeft = new btnRowFive ('◀'),
    arrowDown = new btnRowFive ('▼'),
    arrowRight = new btnRowFive ('▶');
   controlRight = new btnRowFive ('Ctrl');

root.prepend(textarea, keyboard);
body.prepend(root);

const onKeyUp = (e) => {
    event.preventDefault();
    document.querySelectorAll(`.active`).forEach(el => el.classList.remove('active'));
    document.querySelector(`.keyboard .${e.code}`).classList.add('active');
    textarea.value += e.target.innerText;
}

// events space, tab, backspace, shift
const onClick = (e) => {
    document.querySelectorAll(`.active`).forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');

    if(e.target.classList.contains('Space')) {
       return textarea.value += ' ';
    }

    if(e.target.classList.contains('Tab')) {
        event.preventDefault();
        return textarea.value += '    ';
    }

    if (e.target.classList.contains('Backspace')) {
        return textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }

    if (e.target.classList.contains('Ctrl') || e.target.classList.contains('Win') || 
        e.target.classList.contains('Alt') || e.target.classList.contains('◀') ||
        e.target.classList.contains('▼') || e.target.classList.contains('▶') ||
        e.target.classList.contains('▲') ) {
            return textarea.value
    }

    if(e.target.classList.contains('Shift') ) {

        if(!upperCase) {
            document.querySelectorAll('.btn').forEach(el => {
                if(el.getAttribute('data-rucharcode')) {
                    el.innerHTML = el.innerHTML.toLocaleUpperCase();
                }
            });
            return upperCase = true;
        };
    }

    if(e.target.classList.contains('CapsLock')) {

        if(!pressCapsLock) {
            document.querySelectorAll('.btn').forEach(el => {
                if(el.getAttribute('data-rucharcode')) {
                    el.innerHTML = el.innerHTML.toLocaleUpperCase();
                }
            });
            return pressCapsLock = true;
        };
        if(pressCapsLock) {
            document.querySelectorAll('.btn').forEach(el => {
                if(el.getAttribute('data-rucharcode')) {
                    el.innerHTML = el.innerHTML.toLocaleLowerCase();;
                }
            });
            return pressCapsLock = false;
        }
    }

    textarea.value += e.target.innerText;

    if(upperCase) {
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        upperCase = false;
    }
}

// language switching
const onDuobleKey = (e) => {
    if(e.code == 'ShiftLeft') pressShift = true;

    if(e.code == 'AltLeft' && pressShift) {
        event.preventDefault();
        pressShift = false;

        if(!alterText) {
            document.querySelectorAll('.btn').forEach(el => {
                if(el.getAttribute('data-rucharcode')) {
                    el.innerHTML = `${String.fromCharCode(el.getAttribute('data-rucharcode'))}`
                }
            });  
            alterText = true;
            localStorage.setItem('alterText', JSON.stringify(alterText));
            return;
        };

        if(alterText) {
            document.querySelectorAll('.btn').forEach(el => {
                if(el.getAttribute('data-encharcode') && alterText) {
                    el.innerHTML = `${String.fromCharCode(el.getAttribute('data-encharcode'))}`
                }
            });
            alterText = false;
            localStorage.setItem('alterText', JSON.stringify(alterText));
            return;
        };
    }
}

//  letter case events
const onShift = (e) => {
    if(e.code != 'ShiftLeft') return;

    if(!upperCase) {
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return upperCase = true;
    };

    if(upperCase) {
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return upperCase = false;
    }
}

//  letter case events
const onClickShift = (e) => {
    if(e.code != 'ShiftLeft') return;

    if(!upperCase) {
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return upperCase = true;
    };

    if(upperCase) {
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return upperCase = false;
    }
}

keyboard.addEventListener('click', onClick);
document.addEventListener('keyup', onKeyUp);
document.addEventListener('keydown', onDuobleKey)
document.addEventListener('keydown', onShift)
document.addEventListener('click', onClickShift)


window.onload = () => {
    console.log(1)
    const localAlterText = JSON.parse(localStorage.getItem('alterText'))

    if (localAlterText == true) {
        console.log(document.querySelectorAll('.btn'))
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = `${String.fromCharCode(el.getAttribute('data-rucharcode'))}`
            }
        });  
        alterText = true;
        localStorage.setItem('alterText', JSON.stringify(alterText));
        return;
    }
}
