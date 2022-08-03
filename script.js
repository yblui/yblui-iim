let keyboards = [
    {
        "name": "Default Keyboard",
        "normal": {
            "`": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "0": "",
            "-": "",
            "=": "",
            "\\": "",
            "Q": "",
            "W": "",
            "E": "",
            "R": "",
            "T": "",
            "Y": "",
            "U": "",
            "I": "",
            "O": "",
            "P": "",
            "[": "",
            "]": "",
            "A": "",
            "S": "",
            "D": "",
            "F": "",
            "G": "",
            "H": "",
            "J": "",
            "K": "",
            "L": "",
            ";": "",
            "'": "",
            "Z": "",
            "X": "",
            "C": "",
            "V": "",
            "B": "",
            "N": "",
            "M": "",
            ",": "",
            ".": "",
            "/": ""
        },
        "shift": {
            "`": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "0": "",
            "-": "",
            "=": "",
            "Q": "",
            "W": "",
            "E": "",
            "R": "",
            "T": "",
            "Y": "",
            "U": "",
            "I": "",
            "O": "",
            "P": "",
            "[": "",
            "]": "",
            "\\": "",
            "A": "",
            "S": "",
            "D": "",
            "F": "",
            "G": "",
            "H": "",
            "J": "",
            "K": "",
            "L": "",
            ";": "",
            "'": "",
            "Z": "",
            "X": "",
            "C": "",
            "V": "",
            "B": "",
            "N": "",
            "M": "",
            ",": "",
            ".": "",
            "/": ""
        },
        "special": []
    }
]
let currentKeyboard = "Default Keyboard";

function addKeyboard(name) {
    keyboards[keyboards.length] = {
        "name": name,
        "normal": {
            "`": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "0": "",
            "-": "",
            "=": "",
            "\\": "",
            "Q": "",
            "W": "",
            "E": "",
            "R": "",
            "T": "",
            "Y": "",
            "U": "",
            "I": "",
            "O": "",
            "P": "",
            "[": "",
            "]": "",
            "A": "",
            "S": "",
            "D": "",
            "F": "",
            "G": "",
            "H": "",
            "J": "",
            "K": "",
            "L": "",
            ";": "",
            "'": "",
            "Z": "",
            "X": "",
            "C": "",
            "V": "",
            "B": "",
            "N": "",
            "M": "",
            ",": "",
            ".": "",
            "/": ""
        },
        "shift": {
            "`": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "0": "",
            "-": "",
            "=": "",
            "Q": "",
            "W": "",
            "E": "",
            "R": "",
            "T": "",
            "Y": "",
            "U": "",
            "I": "",
            "O": "",
            "P": "",
            "[": "",
            "]": "",
            "\\": "",
            "A": "",
            "S": "",
            "D": "",
            "F": "",
            "G": "",
            "H": "",
            "J": "",
            "K": "",
            "L": "",
            ";": "",
            "'": "",
            "Z": "",
            "X": "",
            "C": "",
            "V": "",
            "B": "",
            "N": "",
            "M": "",
            ",": "",
            ".": "",
            "/": ""
        },
        "special": []
    }
    quitPanel();
}
function nextKeyboard() {
    for (let i = 0; i < keyboards.length; i++) {
        if (keyboards[i].name == currentKeyboard) {
            currentKeyboard = keyboards[(i + 1) % (keyboards.length)].name;
            for (let k of document.getElementsByClassName("key")) {
                k.getElementsByClassName("right")[0].value = keyboards[(i + 1) % (keyboards.length)].shift[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
                k.getElementsByClassName("right")[1].value = keyboards[(i + 1) % (keyboards.length)].normal[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
            }
            break;
        }
    }
}
function editKeyboard(type, key, value) {
    for (let kbd of keyboards) {
        if (kbd.name == currentKeyboard) {
            kbd[type][key] = value;
            break;
        }
    }
}
function deleteKeyboard() {
    if (keyboards.length > 1) {
        currentKeyboard = keyboards[0].name;
        for (let k of document.getElementsByClassName("key")) {
            k.getElementsByClassName("right")[0].value = keyboards[0].shift[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
            k.getElementsByClassName("right")[1].value = keyboards[0].normal[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
        }
    }
}
function editOn() {
    for (let i of document.querySelectorAll("#keyboard input")) {
        i.disabled = false;
    }
}
function editOff() {
    for (let i of document.querySelectorAll("#keyboard input")) {
        i.disabled = true;
    }
}
function addPanel() {
    document.getElementById("addKeyboard").style.display = "block";
}

function quitPanel() {
    document.getElementById("addKeyboard").style.display = "none";
}

function addRule(rule1, rule2) {
    for (let i of keyboards) {
        if (i.name == currentKeyboard) {
            for (let u of i.special) {
                if (u.before == rule1||!rule1) {
                    return;
                }
            }
            document.getElementById("rules").innerHTML += ("<div><strong>" + rule1 + "</strong> -> " + rule2 + "<button onclick='deleteRule(`" + rule1 + "`,this.parentNode);'>Delete this rule</button></div>");
            i.special[i.special.length] = {
                "before": rule1,
                "after": rule2
            }
            i.special.sort(function (a, b) { return a.before.length - b.before.length })
        }
    }
}

function deleteRule(rule, node) {
    node.parentNode.removeChild(node);
    for (let kbd of keyboards) {
        if (kbd.name == currentKeyboard) {
            for (let q = 0; q < kbd.special.length; q++) {
                if (kbd.special[q].before == rule) {
                    kbd.special.splice(q, 1);
                }
            }
        }
    }
}

function input(e, text) {
    let selectStart = text.selectionStart;
    let str = text.value.split("");
    str.splice(text.selectionStart, text.selectionEnd - text.selectionStart)
    str = str.join("");
    text.value = str;
    text.selectionStart = selectStart;
    text.selectionEnd = selectStart;
    let key = ""
    for (let i of document.getElementsByClassName("key")) {
        if (i.getElementsByClassName("left")[0].innerText == e.key || i.getElementsByClassName("left")[1].innerText == e.key) {
            key = i.getElementsByClassName("left")[1].innerText.toUpperCase();
            break;
        }
    }
    for (let kbd of keyboards) {
        if (kbd.name == currentKeyboard) {
            if (kbd[(key.toLowerCase() != e.key) ? "shift" : "normal"][key]) {
                let move = 1;
                let s = text.value.split("");
                s.splice(selectStart, 0, kbd[(key.toLowerCase() != e.key) ? "shift" : "normal"][key]);
                s = s.join("");
                s = [s.slice(0, selectStart + 1), s.slice(selectStart + 1, s.length)];
                for (let r of kbd.special) {
                    if (r.before == s[0].slice(s[0].length - r.before.length, s[0].length)) {
                        s[0] = s[0].split("");
                        s[0].splice(s[0].length - r.before.length, r.before.length, r.after);
                        s[0] = s[0].join("");
                        move = r.after.length - r.before.length + 1;
                        break;
                    }
                }
                s = s.join("");
                text.value = s;
                text.selectionStart = selectStart + move;
                text.selectionEnd = selectStart + move;
                e.preventDefault();
            }
            break;
        }
    }
}

function newText() {
    document.getElementById("container").innerHTML += '<div><textarea onkeypress="input(event,this);"></textarea><button onclick="deleteText(this.parentNode);">Delete this (Del)</button></div>';
}

function deleteText(node){
    node.parentNode.removeChild(node);
}