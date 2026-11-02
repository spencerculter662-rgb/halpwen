//this is the front end controller for the web app

//the varibals for the power managment
//this is is i sis i sisi s sisiisisi si sis isis i is  a programmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm m m m m mm m m m m m m m m m m
const on = document.getElementById("main_p_on");
const off = document.getElementById("main_p_off");

const synk = document.getElementById("sy");


// the varibals for all of the lights

const black_o = document.getElementById("black");
const master = document.getElementById("master");
const mast_num = document.getElementById("master_num");

//set all of the varibuls
const relay_1 = document.getElementById("rl_1");
var relay1_color = window.getComputedStyle(relay_1).backgroundColor;
const relay_2 = document.getElementById("rl_2");
var relay2_color = window.getComputedStyle(relay_2).backgroundColor;
const relay_3 = document.getElementById("rl_3");
var relay3_color = window.getComputedStyle(relay_3).backgroundColor;
const relay_4 = document.getElementById("rl_4");
var relay4_color = window.getComputedStyle(relay_4).backgroundColor;
const relay_5 = document.getElementById("rl_5");
var relay5_color = window.getComputedStyle(relay_5).backgroundColor;
const relay_6 = document.getElementById("rl_6");
var relay6_color = window.getComputedStyle(relay_6).backgroundColor;
const relay_7 = document.getElementById("rl_7");
var relay7_color = window.getComputedStyle(relay_7).backgroundColor;
const relay_8 = document.getElementById("rl_8");
var relay8_color = window.getComputedStyle(relay_8).backgroundColor;
const relay_9 = document.getElementById("rl_9");
var relay9_color = window.getComputedStyle(relay_9).backgroundColor;
const relay_10 = document.getElementById("rl_10");
var relay10_color = window.getComputedStyle(relay_10).backgroundColor;

let sw = 0


// get all of the objects from the screen
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
    //this dus not egsist
}

on.addEventListener("click", power_on);
off.addEventListener("click", power_off);
black_o.addEventListener("click", black);

//the relays derect managment

function relay1_() {
    relay1_color = window.getComputedStyle(relay_1).backgroundColor;
    console.log(relay1_color);
    //change the color for all of the butoms
    if (relay1_color === "rgb(255, 0, 0)") {
        relay_1.style.backgroundColor = "green";
        
    } else if (relay1_color === "rgb(0, 128, 0)") {
        relay_1.style.backgroundColor = "red";
    }
    return_dat("relay1","swich");
}

function relay2_() {
    relay2_color = window.getComputedStyle(relay_2).backgroundColor;
    console.log(relay2_color);
    //
    if (relay2_color === "rgb(255, 0, 0)") {
        relay_2.style.backgroundColor = "green";
        
    } else if (relay2_color === "rgb(0, 128, 0)") {
        relay_2.style.backgroundColor = "red";
    }
    return_dat("relay2","swich");
}

function relay3_() {
    relay3_color = window.getComputedStyle(relay_3).backgroundColor;
    console.log(relay3_color);
    //
    if (relay3_color === "rgb(255, 0, 0)") {
        relay_3.style.backgroundColor = "green";
        
    } else if (relay3_color === "rgb(0, 128, 0)") {
        relay_3.style.backgroundColor = "red";
    }
    return_dat("relay3","swich");
}

function relay4_() {
    relay4_color = window.getComputedStyle(relay_4).backgroundColor;
    console.log(relay4_color);
    //
    if (relay4_color === "rgb(255, 0, 0)") {
        relay_4.style.backgroundColor = "green";
        
    } else if (relay4_color === "rgb(0, 128, 0)") {
        relay_4.style.backgroundColor = "red";
    }
    return_dat("relay4","swich");
}

function relay5_() {
    relay5_color = window.getComputedStyle(relay_5).backgroundColor;
    console.log(relay5_color);
    //
    if (relay5_color === "rgb(255, 0, 0)") {
        relay_5.style.backgroundColor = "green";
        
    } else if (relay5_color === "rgb(0, 128, 0)") {
        relay_5.style.backgroundColor = "red";
    }
    return_dat("relay5","swich");
}

function relay6_() {
    relay6_color = window.getComputedStyle(relay_6).backgroundColor;
    console.log(relay6_color);
    //
    if (relay6_color === "rgb(255, 0, 0)") {
        relay_6.style.backgroundColor = "green";
        
    } else if (relay6_color === "rgb(0, 128, 0)") {
        relay_6.style.backgroundColor = "red";
    }
    return_dat("relay6","swich");
}

function relay7_() {
    relay7_color = window.getComputedStyle(relay_7).backgroundColor;
    console.log(relay7_color);
    //
    if (relay7_color === "rgb(255, 0, 0)") {
        relay_7.style.backgroundColor = "green";
        
    } else if (relay7_color === "rgb(0, 128, 0)") {
        relay_7.style.backgroundColor = "red";
    }
    return_dat("relay7","swich");
}

function relay8_() {
    relay8_color = window.getComputedStyle(relay_8).backgroundColor;
    console.log(relay8_color);
    //
    if (relay8_color === "rgb(255, 0, 0)") {
        relay_8.style.backgroundColor = "green";
        
    } else if (relay8_color === "rgb(0, 128, 0)") {
        relay_8.style.backgroundColor = "red";
    }
    return_dat("relay8","swich");
}

function relay9_() {
    relay9_color = window.getComputedStyle(relay_9).backgroundColor;
    console.log(relay9_color);
    //
    if (relay9_color === "rgb(255, 0, 0)") {
        relay_9.style.backgroundColor = "green";
        
    } else if (relay9_color === "rgb(0, 128, 0)") {
        relay_9.style.backgroundColor = "red";
    }
    return_dat("relay9","swich");
}

function relay10_() {
    relay10_color = window.getComputedStyle(relay_10).backgroundColor;
    console.log(relay10_color);
    //
    if (relay10_color === "rgb(255, 0, 0)") {
        relay_10.style.backgroundColor = "green";
        
    } else if (relay10_color === "rgb(0, 128, 0)") {
        relay_10.style.backgroundColor = "red";
    }
    return_dat("relay10","swich");
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

