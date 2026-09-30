//this is the front end controller for the web app

const on = document.getElementById("main_p_on");
const off = document.getElementById("main_p_off");

const black_o = document.getElementById("black");
const master = document.getElementById("master");
const mast_num = document.getElementById("master_num");

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

function master_() {
    return_dat("master","")
}

on.addEventListener("click", power_on);
off.addEventListener("click", power_off);
black_o.addEventListener("click", black);
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

