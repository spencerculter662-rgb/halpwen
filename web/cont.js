//this is the front end controller for the web app

const on = document.getElementById("main_p_on");
const off = document.getElementById("main_p_off");



async function return_dat(pow) {
    const datasend = {power_: pow};

    try {
        const resp = await fetch('/api/endpoint', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(datasend)
        });
    } catch (error) {
        console.error('eroor sending data ')
    }
}


function power_on() {
    const power = "on";
    return_dat(power); 
}

on.addEventListener("click", power_on);