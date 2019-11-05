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

            if(code === 'ShiftLeft' || code === 'ShiftRight') {
                div.innerHTML = 'Shift'
                keyboardRowPos4.append(div);
                return;
            }

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

            if(code === 'ControlLeft' || code === 'ControlRight') {
                div.innerHTML = 'Ctrl'
                keyboardRowPos5.append(div);
                return;
            }
            
            if(code == 'AltLeft' || code == 'AltRight') {
                div.innerHTML = 'Alt'
                keyboardRowPos5.append(div);
                return;
            }

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

let shiftLeft = new btnRowFour ('ShiftLeft'),
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
    shiftRight = new btnRowFour ('ShiftRight');

let controlLeft  = new btnRowFive ('ControlLeft'),
    win = new btnRowFive ('Win',),
    altLeft  = new btnRowFive ('AltLeft'),
    space = new btnRowFive ('Space'),
    altRight = new btnRowFive ('AltRight'),
    arrowLeft = new btnRowFive ('◀'),
    arrowDown = new btnRowFive ('▼'),
    arrowRight = new btnRowFive ('▶');
    controlRight = new btnRowFive ('ControlRight');


let pressShift = false;
let pressCapsLock = false;
let alterText = false;  
let switchLanguage = false;

root.prepend(textarea, keyboard);
body.prepend(root);

// reset event default fisical keybord
document.onkeydown = (e) => e.code ? false : true;

// switching style key
const styleKeyDown = (e) => {
    if(e.code == 'ShiftLeft' || e.code == 'ShiftRight' || e.code == 'CapsLock') return;
    document.querySelector(`.keyboard .${e.code}`).classList.add('active');
}

// switching style key
const styleKeyUp = (e) => {
    if(e.code == 'ShiftLeft' || e.code == 'ShiftRight' || e.code == 'CapsLock') return;
    document.querySelectorAll(`.active`).forEach(el => el.classList.remove('active'));
}

// switching style mouse
const styleMouseDown = (e) => {
    if(e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) return;
    if(!e.target.classList.contains('btn') && !e.target.classList.contains('special--btn')) return;
    e.target.classList.add('active');
}

// switching style mouse
const styleMouseUp = (e) => {
    if(e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) return;
    document.querySelectorAll(`.active`).forEach(el => el.classList.remove('active'));
}

// add text in text area for key event;
const innerTextAreaOnKeyDown = (e) => {

    if(e.code != 'AltLeft') {
       switchLanguage = false;
    }

    if(e.code == 'Space') {
       return textarea.value += '\u0020';
    }

    if(e.code == 'Tab') {
        return textarea.value += '\u0009';
    }

    if(e.code == 'Backspace') {
        return textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }

    if(e.code == 'Enter') {
        return textarea.value += '\r\n';
    }

    if (e.code == 'ControlRight' || e.code == 'ControlLeft' ||
        e.code == 'Win' || e.code == 'AltRight' || e.code == 'ShiftLeft' || e.code == 'ShiftRight' ||
        e.code == 'AltLeft' || e.code == '◀' || e.code == 'CapsLock' ||
        e.code == '▼' || e.code == '▶' || e.code == '▲') {
        return;
    }

    if(pressShift) {
        textarea.value += e.key.toUpperCase();
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();
            }
        });
        return pressShift = false;
    }   
    console.log(e.key)
    return textarea.value += e.key;
} 

// add text in text area for mouse event;
const innerTextAreaOnMouseDown = (e) => {
    
    if(!e.target.classList.contains('btn') && !e.target.classList.contains('special--btn')) return;
    
    if(e.target.classList.contains('Space')) {
        return textarea.value += '\u0020';
    }

    if(e.target.classList.contains('Tab')) {
        return textarea.value += '\u0009';
    }

    if(e.target.classList.contains('Enter')) {
        return textarea.value += '\r\n';
    }

    if(e.target.classList.contains('Backspace')) {
        return textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }

    if (e.target.innerText == 'Ctrl' || e.target.innerText == 'Win' || 
        e.target.innerText == 'Alt' || e.target.innerText == '◀' ||
        e.target.innerText == '▼' || e.target.innerText == '▶' ||
        e.target.innerText == '▲' || e.target.innerText == 'Shift' || 
        e.target.innerText == 'CapsLock') {
        return;
    }

    if(pressShift) {
        textarea.value +=  e.target.innerText.toUpperCase();
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return pressShift = false;
    }
    
    return textarea.value += e.target.innerText;
}

// press shift switching case events key
const onKeyDownShift = (e) => {

    if(e.code != 'ShiftLeft' && e.code != 'ShiftRight') return;

    if(!pressShift) {

        if(pressCapsLock) {
            document.querySelector(`.caps`).classList.remove('caps');
            pressCapsLock = false;
        }
        
        document.querySelector(`.keyboard .${e.code}`).classList.add('active');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return pressShift = true;
    };

    if(pressShift) {
        document.querySelector(`.keyboard .${e.code}`).classList.remove('active');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return pressShift = false;
    }
}

// press shift switching case events mouse
const onMouseDownShift = (e) => {
    if(!e.target.classList.contains('ShiftLeft') && !e.target.classList.contains('ShiftRight')) return;
    
    if(pressCapsLock) {
        document.querySelector(`.caps`).classList.remove('caps');
        pressCapsLock = false;
    }

    if(!pressShift) {
        e.target.classList.add('active');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return pressShift = true;
    };

    if(pressShift) {
        e.target.classList.remove('active');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return pressShift = false;
    }
}

// press caps lock switching case events key
const onKeyDownCaps = (e) => {

    if(e.code != 'CapsLock') return;
    
    if(!pressCapsLock) {
        pressShift = false;
        document.querySelector(`.keyboard .${e.code}`).classList.add('caps');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return pressCapsLock = true;
    }

    if(pressCapsLock) {
        document.querySelector(`.keyboard .${e.code}`).classList.remove('caps');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return pressCapsLock = false;
    }
}

// press caps lock switching case events mouse
const onMouseDownCaps = (e) => {
    if(!e.target.classList.contains('CapsLock')) return;
    
    if(!pressCapsLock) {
        e.target.classList.add('caps');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleUpperCase();
            }
        });
        return pressCapsLock = true;
    }

    if(pressCapsLock) {
        e.target.classList.remove('caps');
        document.querySelectorAll('.btn').forEach(el => {
            if(el.getAttribute('data-rucharcode')) {
                el.innerHTML = el.innerHTML.toLocaleLowerCase();;
            }
        });
        return pressCapsLock = false;
    }
}

// language switching
const onDuobleKey = (e) => {
    if(e.code == 'ShiftLeft' || e.code == 'ShiftRight') switchLanguage = true;

    if(e.code == 'AltLeft' && switchLanguage) {
        switchLanguage = false;

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

document.addEventListener('keydown', styleKeyDown);
document.addEventListener('keydown', innerTextAreaOnKeyDown);
document.addEventListener('keydown', onKeyDownShift);
document.addEventListener('keydown', onKeyDownCaps);
document.addEventListener('keydown', onDuobleKey);
document.addEventListener('keyup', styleKeyUp);

document.addEventListener('mousedown', styleMouseDown);
document.addEventListener('mousedown', innerTextAreaOnMouseDown);
document.addEventListener('mousedown', onMouseDownShift);
document.addEventListener('mousedown', onMouseDownCaps);
document.addEventListener('mouseup', styleMouseUp);

window.onload = () => {

    const localAlterText = JSON.parse(localStorage.getItem('alterText'))

    if (localAlterText == true) {
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
