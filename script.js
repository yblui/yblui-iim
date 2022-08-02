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