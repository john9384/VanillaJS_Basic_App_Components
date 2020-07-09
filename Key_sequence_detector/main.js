const input_seq = [];
const code = "listen";
const code2 = "arrowup,arrowdown,arrowright,arrowleft,shift,enter"

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    input_seq.push(e.key);
    input_seq.splice(-code.length - 1, input_seq.length - code.length);
    console.log(input_seq)
    if (input_seq.join("") == code) {
        cornify_add()
    } else if (input_seq.join(",").toLowerCase() == code2) {
        alert("You awakened the dark lord")
    }

})