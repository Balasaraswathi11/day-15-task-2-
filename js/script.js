var div1 = document.createElement("div")
div1.className = 'textcontainer container-fluid col-md-12  d-flex justify-content-center flex-column align-items-center'

var heading = document.createElement("h1")
heading.textContent = "Dom calculator"
heading.id = "title"

var para = document.createElement("p")
para.textContent = "guvi task(2)-day15"
para.id = "description"
div1.append(heading, para)

var calculatorbody = document.createElement("div") // bossdiv
calculatorbody.className = "calculator-body container"
let input = document.createElement("input")
input.type = "text"
input.placeholder = "0"
input.id = "result"

const buttondiv = document.createElement("div")
buttondiv.className = "buttondiv container-fluid"

const buttons = [
    ["C", "DEL", "%", "*"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    ["0", "00", ".", "="]
]

buttons.forEach(row => {
    const buttonRow = document.createElement("div")
    buttonRow.className = "button-row"

    row.forEach(btnText => {
        const btn = document.createElement("button")
        btn.textContent = btnText
        btn.className = "btn-custom"

        if (btnText === "C") {
            btn.id = "clear"
            btn.style.color = "green"
        } else if (btnText === ".") {
            btn.id = "point"
        } else if (btnText === "DEL") {
            btn.id = "erase"
            btn.style.color = ""
        } else if (btnText === "%") {
            btn.id = "percent"
            btn.style.color = "green"
        } else if (btnText === "+") {
            btn.id = "add"
            btn.style.color = "green"
        } else if (btnText === "-") {
            btn.id = "subtract"
            btn.style.color = "green"
        } else if (btnText === "=") {
            btn.id = "equal"
        } else if (btnText === "/") {
            btn.id = "divide"
            btn.style.color = "green"
        } else if (btnText === "*") {
            btn.id = "multiply"
            btn.style.color = "green"
        } else if (btnText === "1") {
            btn.id = "1"
        } else if (btnText === "2") {
            btn.id = "2"
        } else if (btnText === "3") {
            btn.id = "3"
        } else if (btnText === "4") {
            btn.id = "4"
        } else if (btnText === "5") {
            btn.id = "5"
        } else if (btnText === "6") {
            btn.id = "6"
        } else if (btnText === "7") {
            btn.id = "7"
        } else if (btnText === "8") {
            btn.id = "8"
        } else if (btnText === "9") {
            btn.id = "9"
        } else if (btnText === "0") {
            btn.id = "0"
        } else if (btnText === "00") {
            btn.id = "00"
        } else {
            btn.id = "btn"
            btn.style.color = "green"
        }
        buttonRow.appendChild(btn)
    })

    buttondiv.appendChild(buttonRow)
})

calculatorbody.append(input, buttondiv)
document.body.append(div1, calculatorbody)

var inputbox = document.getElementById("result")
var button = document.querySelectorAll(".btn-custom")

button.forEach(buttonindex => {
    buttonindex.addEventListener("click", () => {
        var num = buttonindex.innerHTML;
        console.log(num)
        if (num == "=") {
            inputbox.value = eval(inputbox.value)
        } else if (num == "C") {
            inputbox.value = "";
        } else if (num == "DEL") {
            inputbox.value = inputbox.value.slice(0, -1);
        } else {
            inputbox.value += num
        }

    })
})
// Function to handle keyboard events

function handleKeyPress(event) {
    const key = event.key;
    const inputBox = document.getElementById("result");

    switch (key) {
        case "Enter":
            inputBox.value = eval(inputBox.value);
            break;
        case "Escape":
            inputBox.value = "";
            break;
        case "Backspace":
            inputBox.value = inputBox.value.slice(0, -1);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            inputBox.value += key;
            break;
        case ".":
            if (!inputBox.value.includes(".")) {
                inputBox.value += key;
            }
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            inputBox.value += key;
            break;
        // Number pad keys
        case "Decimal":
            if (!inputBox.value.includes(".")) {
                inputBox.value += ".";
            }
            break;
        case "Numpad0":
        case "Numpad1":
        case "Numpad2":
        case "Numpad3":
        case "Numpad4":
        case "Numpad5":
        case "Numpad6":
        case "Numpad7":
        case "Numpad8":
        case "Numpad9":
            inputBox.value += key[key.length - 1]; // Extract the number from the key name
            break;
        default:
            alert("Error: Only Numbers are allowed")
            break;
    }
}

// Add event listener for keydown event
document.addEventListener("keydown", handleKeyPress);
