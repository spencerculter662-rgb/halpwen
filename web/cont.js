//this is the front end controller for the web app

//the varibals for the power managment

const on = document.getElementById("main_p_on");
const off = document.getElementById("main_p_off");

const synk = document.getElementById("sy");


// the varibals for all of the lights

const black_o = document.getElementById("black");
const master = document.getElementById("master");
const mast_num = document.getElementById("master_num");


const relay_1 = document.getElementById("rl_1");
const relay_2 = document.getElementById("rl_2");
const relay_3 = document.getElementById("rl_3");
const relay_4 = document.getElementById("rl_4");
const relay_5 = document.getElementById("rl_5");
const relay_6 = document.getElementById("rl_6");
const relay_7 = document.getElementById("rl_7");
const relay_8 = document.getElementById("rl_8");
const relay_9 = document.getElementById("rl_9");
const relay_10 = document.getElementById("rl_10");

let sw = 0



const par1_red = document.getElementById("par1_red");
const par1_green = document.getElementById("par1_green");
const par1_blue = document.getElementById("par1_blue");
const par1r_n = document.getElementById("par1r_num");
const par1g_n = document.getElementById("par1g_num");
const par1b_n = document.getElementById("par1b_num");

const par2_red = document.getElementById("par2_red");
const par2_green = document.getElementById("par2_green");
const par2_blue = document.getElementById("par2_blue");
const par2r_n = document.getElementById("par2r_num");
const par2g_n = document.getElementById("par2g_num");
const par2b_n = document.getElementById("par2b_num");

const bar1_red = document.getElementById("bar1_red");
const bar1_green = document.getElementById("bar1_green");
const bar1_blue = document.getElementById("bar1_blue");
const bar1r_n = document.getElementById("bar1r_num");
const bar1g_n = document.getElementById("bar1g_num");
const bar1b_n = document.getElementById("bar1b_num");

const bar2_red = document.getElementById("bar2_red");
const bar2_green = document.getElementById("bar2_green");
const bar2_blue = document.getElementById("bar2_blue");
const bar2r_n = document.getElementById("bar2r_num");
const bar2g_n = document.getElementById("bar2g_num");
const bar2b_n = document.getElementById("bar2b_num");


//the funcshin for sending the data to the node js server

async function return_dat(can,dat) {
    const datasend = {
                     "can": can,
                     "dat": dat
                    };

    try {
        const resp = await fetch('/api/endpoint', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datasend)
        });

            if (!resp.ok) {
                throw new Error(`Request failed: ${resp.status}`);
            }

            console.log('server response:', await resp.json());
    } catch (error) {
            console.error('error sending data:', error);
    }
}


/////////////////////////////////////////////////////all of the fucshin for feading the server

function power_on() {
    return_dat("power","on");
}
function power_off() {
    return_dat("power","off")
}
function black() {
    return_dat("black","swich")
}

//sink all of the data from the pyton server
function sy___() {
    
}

on.addEventListener("click", power_on);
off.addEventListener("click", power_off);
black_o.addEventListener("click", black);

//the relays derect managment

function relay1_() {
    sw = 1;
    return_dat("relay1","swich");
    if (sw = 1) {
        if (relay_1.style.backgroundColor = "green" ) {
            relay_1.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_1.style.backgroundColor = "red" ) {
            relay_1.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay2_() {
    sw = 1;
    return_dat("relay2","swich");
    if (sw = 1) {
        if (relay_2.style.backgroundColor = "green" ) {
            relay_2.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_2.style.backgroundColor = "red" ) {
            relay_2.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay3_() {
    sw = 1;
    return_dat("relay3","swich");
    if (sw = 1) {
        if (relay_3.style.backgroundColor = "green" ) {
            relay_3.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_3.style.backgroundColor = "red" ) {
            relay_3.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay4_() {
    sw = 1;
    return_dat("relay4","swich");
    if (sw = 1) {
        if (relay_4.style.backgroundColor = "green" ) {
            relay_4.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_4.style.backgroundColor = "red" ) {
            relay_4.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay5_() {
    sw = 1;
    return_dat("relay5","swich");
    if (sw = 1) {
        if (relay_5.style.backgroundColor = "green" ) {
            relay_5.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_5.style.backgroundColor = "red" ) {
            relay_5.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay6_() {
    sw = 1;
    return_dat("relay6","swich");
    if (sw = 1) {
        if (relay_6.style.backgroundColor = "green" ) {
            relay_6.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_6.style.backgroundColor = "red" ) {
            relay_6.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay7_() {
    sw = 1;
    return_dat("relay7","swich");
    if (sw = 1) {
        if (relay_7.style.backgroundColor = "green" ) {
            relay_7.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_7.style.backgroundColor = "red" ) {
            relay_7.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay8_() {
    sw = 1;
    return_dat("relay8","swich");
    if (sw = 1) {
        if (relay_8.style.backgroundColor = "green" ) {
            relay_8.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_8.style.backgroundColor = "red" ) {
            relay_8.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay9_() {
    sw = 1;
    return_dat("relay9","swich");
    if (sw = 1) {
        if (relay_9.style.backgroundColor = "green" ) {
            relay_9.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_9.style.backgroundColor = "red" ) {
            relay_9.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

function relay10_() {
    sw = 1;
    return_dat("relay10","swich");
    if (sw = 1) {
        if (relay_10.style.backgroundColor = "green" ) {
            relay_10.style.backgroundColor = "red";
            console.log("1");
            sw = 0;
        }
    }
    if (sw = 1) {
        if (relay_10.style.backgroundColor = "red" ) {
            relay_10.style.backgroundColor = "green";
            console.log("2");
             sw = 0;
        }
    }
}

relay_1.addEventListener("click", relay1_)
relay_2.addEventListener("click", relay2_)
relay_3.addEventListener("click", relay3_)
relay_4.addEventListener("click", relay4_)
relay_5.addEventListener("click", relay5_)
relay_6.addEventListener("click", relay6_)
relay_7.addEventListener("click", relay7_)
relay_8.addEventListener("click", relay8_)
relay_9.addEventListener("click", relay9_)
relay_10.addEventListener("click", relay10_)


master.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    mast_num.textContent = Event.target.value;
    return_dat("master",dat1);
});

par1_red.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par1r_n.textContent = Event.target.value;
    return_dat("par1_red",dat1);
});
par1_green.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par1g_n.textContent = Event.target.value;
    return_dat("par1_green",dat1);
});
par1_blue.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par1b_n.textContent = Event.target.value;
    return_dat("par1_blue",dat1);
});

par2_red.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par2r_n.textContent = Event.target.value;
    return_dat("par2_red",dat1);
});
par2_green.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par2g_n.textContent = Event.target.value;
    return_dat("par2_green",dat1);
});
par2_blue.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    par2b_n.textContent = Event.target.value;
    return_dat("par2_blue",dat1);
});

bar1_red.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar1r_n.textContent = Event.target.value;
    return_dat("bar1_red",dat1);
});
bar1_green.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar1g_n.textContent = Event.target.value;
    return_dat("bar1_green",dat1);
});
bar1_blue.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar1b_n.textContent = Event.target.value;
    return_dat("bar1_blue",dat1);
});

bar2_red.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar2r_n.textContent = Event.target.value;
    return_dat("bar2_red",dat1);
});
bar2_green.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar2g_n.textContent = Event.target.value;
    return_dat("bar2_green",dat1);
});
bar2_blue.addEventListener("click",(Event) => {
    const dat1 = Event.target.value;
    bar2b_n.textContent = Event.target.value;
    return_dat("bar2_blue",dat1);
});
//ah thus is a program

