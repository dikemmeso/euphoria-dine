let bulb = document.getElementById("bulb");
let btn_switch = document.getElementById("switch");

let state = "off";
btn_switch.onclick = function(){
    if (state == "off") {
        bulb.src = "./img/light-bulb.png";
        btn_switch.textContent = "Turn off bulb"
        state = "on";
    } else {
        bulb.src = "./img/dark-bulb.png";
        btn_switch.textContent = "Turn on bulb"
        state = "off";
    }
}

