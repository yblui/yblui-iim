let keyboards = (getCookie("kbd")) ? getCookie("kbd") : [
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
let currentKeyboard = keyboards[0].name;
for (let c of document.getElementsByClassName("key")) {
    c.getElementsByClassName("right")[0].value = keyboards[0].shift[c.getElementsByClassName("left")[1].innerText.toUpperCase()];
    c.getElementsByClassName("right")[1].value = keyboards[0].normal[c.getElementsByClassName("left")[1].innerText.toUpperCase()];
}
document.getElementById("rules").innerHTML = "";
for (let ii of keyboards[0].special) {
    document.getElementById("rules").innerHTML += ("<div><strong>" + ii.before + "</strong> -> " + ii.after + "<button onclick='deleteRule(`" + ii.before + "`,this.parentNode);'>Delete this rule</button></div>");
}
for (let h of keyboards) {
    if (h.name == currentKeyboard) document.getElementById("keyboards").innerHTML += ('<button class="toggle highlight" onclick="switchKeyboard(this.innerText);">' + h.name + '</button>');
    else document.getElementById("keyboards").innerHTML += ('<button class="toggle" onclick="switchKeyboard(this.innerText);">' + h.name + '</button>');
}
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
    document.getElementById("keyboards").innerHTML += "<button onclick='switchKeyboard(this.innerText);' class='toggle'>" + name + "</button>";
}
function setCookie(name, value) {
    document.cookie = name + "=" + JSON.stringify(value).replace(/\;\"\:/g, "@f@\":").replace(/\=\"\:/g, "@d@\":") + "; expires=Sat, 31 Dec 2050 12:00:00 GMT"
}

function getCookie(name) {
    let a = document.cookie.split(";");
    for (let b of a) {
        b = b.split("=");
        if (b[0].trim() == name) {
            return JSON.parse(b[1].replace(/\@f\@\"\:/g, ";\":").replace(/\@d\@\"\:/g, "=\":"));
        }
    }
    return null;
}
function nextKeyboard() {
    for (let i = 0; i < keyboards.length; i++) {
        if (keyboards[i].name == currentKeyboard) {
            currentKeyboard = keyboards[(i + 1) % (keyboards.length)].name;
            for (let k of document.getElementsByClassName("key")) {
                k.getElementsByClassName("right")[0].value = keyboards[(i + 1) % (keyboards.length)].shift[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
                k.getElementsByClassName("right")[1].value = keyboards[(i + 1) % (keyboards.length)].normal[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
            }
            document.getElementById("rules").innerHTML = "";
            for (let b of keyboards[(i + 1) % (keyboards.length)].special) {
                document.getElementById("rules").innerHTML += ("<div><strong>" + b.before + "</strong> -> " + b.after + "<button onclick='deleteRule(`" + b.before + "`,this.parentNode);'>Delete this rule</button></div>");
            }
            for (let y of document.querySelectorAll("#keyboards button.toggle")) {
                y.classList.remove("highlight");
            }
            document.querySelectorAll("#keyboards button.toggle")[(i + 1) % (keyboards.length)].classList.add("highlight");
            break;
        }
    }
}
function editKeyboard(type, key, value) {
    for (let kbd of keyboards) {
        if (kbd.name == currentKeyboard) {
            kbd[type][key] = value;
            setCookie("kbd", keyboards);
            break;
        }
    }
}
function deleteKeyboard() {
    if (keyboards.length > 1) {
        for (let i = 0; i < keyboards.length; i++) {
            if (keyboards[i].name == currentKeyboard) {
                keyboards.splice(i, 1);
                break;
            }
        }
        currentKeyboard = keyboards[0].name;
        for (let k of document.getElementsByClassName("key")) {
            k.getElementsByClassName("right")[0].value = keyboards[0].shift[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
            k.getElementsByClassName("right")[1].value = keyboards[0].normal[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
        }
        document.getElementById("rules").innerHTML = "";
        for (let b of keyboards[0].special) {
            document.getElementById("rules").innerHTML += ("<div><strong>" + b.before + "</strong> -> " + b.after + "<button onclick='deleteRule(`" + b.before + "`,this.parentNode);'>Delete this rule</button></div>");
        }
        for (let y of document.querySelectorAll("#keyboards button.toggle")) {
            y.classList.remove("highlight");
        }
        document.querySelectorAll("#keyboards button.toggle")[0].classList.add("highlight");
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
                if (u.before == rule1 || !rule1) {
                    return;
                }
            }
            document.getElementById("rules").innerHTML += ("<div><strong>" + rule1 + "</strong> -> " + rule2 + "<button onclick='deleteRule(`" + rule1 + "`,this.parentNode);'>Delete this rule</button></div>");
            i.special[i.special.length] = {
                "before": rule1,
                "after": rule2
            }
            i.special.sort(function (a, b) { return a.before.length - b.before.length })
            setCookie("kbd", keyboards);
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
                    setCookie("kbd", keyboards);
                    break;
                }
            }
            break;
        }
    }
}

function input(e, text) {
    if (e.key == "Enter") return;
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
            let g;
            if (!kbd[(key.toLowerCase() != e.key) ? "shift" : "normal"][key]) { g = e.key }
            else { g = kbd[(key.toLowerCase() != e.key) ? "shift" : "normal"][key] }
            let move = 1;
            let s = text.value.split("");
            s.splice(selectStart, 0, g);
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
            break;
        }
    }
}

function newText() {
    document.getElementById("container").innerHTML += '<div><textarea onkeypress="input(event,this);"></textarea><button onclick="deleteText(this.parentNode);">Delete this</button></div>';
}

function deleteText(node) {
    node.parentNode.removeChild(node);
}

function switchKeyboard(name) {
    currentKeyboard = name;
    for (let i of keyboards) {
        if (i.name == name) {
            for (let k of document.getElementsByClassName("key")) {
                k.getElementsByClassName("right")[0].value = i.shift[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
                k.getElementsByClassName("right")[1].value = i.normal[k.getElementsByClassName("left")[1].innerText.toUpperCase()];
            }
            document.getElementById("rules").innerHTML = "";
            for (let b of i.special) {
                document.getElementById("rules").innerHTML += ("<div><strong>" + b.before + "</strong> -> " + b.after + "<button onclick='deleteRule(`" + b.before + "`,this.parentNode);'>Delete this rule</button></div>");
            }
            break;
        }
    }
    for (let y of document.querySelectorAll("#keyboards button.toggle")) {
        y.classList.remove("highlight");
        if (y.innerText == name) y.classList.add("highlight");
    }
}

function shortcut(key) {
    if (key.key.toUpperCase() == "N" && key.altKey) {
        newText();
        key.preventDefault();
    } else if (key.key.toUpperCase() == "A" && key.altKey) {
        addPanel();
        key.preventDefault();
    } else if (key.key.toUpperCase() == "E" && key.altKey) {
        editOn();
        key.preventDefault();
    } else if (key.key == "Delete" && key.altKey) {
        deleteKeyboard();
        key.preventDefault();
    } else if (key.key == "=" && key.altKey) {
        addRule(document.getElementById('rule1').value, document.getElementById('rule2').value);
        key.preventDefault();
    } else if (key.key == "Alt") {
        nextKeyboard();
        key.preventDefault();
    } else if (key.key == "Enter" && document.getElementById("addKeyboard").style.display == "block") {
        addKeyboard(document.getElementById('name').value);
    } else if (key.key == "Esc") {
        quitPanel();
    }
}