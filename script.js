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
            "\\":"",
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
            "\\":"",
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
        "special": {

        }
    }
]
let currentKeyboard = "Default Keyboard";

function addKeyboard() {

}

function editKeyboard(type, key, value) {
    for (let kbd of keyboards) {
        if (kbd.name == currentKeyboard) {
            kbd[type][key] = value;
            break;
        }
    }
}

function addPanel(){
    document.getElementById("addKeyboard").style.display="block";
    //document.getElementsByTagName("html")[0].style.filter = "blur(10px)"
}