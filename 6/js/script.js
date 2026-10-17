'use strict';

async function onStart(){
    let response = await fetch('./js/airportData.json');
    let data = await response.json();
    let start = data.twoStepStart

    let heading = document.querySelector("h2");
    heading.textContent = start.startTitle;

    let desc = document.querySelector("main p");
    desc.textContent = start.startDesc;

    let buttons = document.querySelectorAll(".step-1-item div");
    for(let i = 0; i < buttons.length; i++){
        if(i == 0){
            buttons[i].textContent = start.nonHubLabel;
        }
        if(i == 1){
            buttons[i].textContent = start.smallLabel;
        }
        if(i == 2){
            buttons[i].textContent = start.mediumLabel;
        }
        if(i == 3){
            buttons[i].textContent = start.largeLabel;
        }
    }
}

window.addEventListener("DOMContentLoaded", onStart);
let sizeChosen = false;
let buttons = document.querySelectorAll(".step-1-item div");
buttons[0].addEventListener("click", async () => { //nonhub button then first sub choice button
    let response = await fetch('./js/airportData.json');
    let data = await response.json();
    let nonhub = data.nonhub;

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = nonhub.nonhubTitle;

        let desc = document.querySelector("main p");
        desc.textContent = nonhub.nonhubDesc;

        let nonhubPorts = nonhub.nonhubPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = nonhubPorts.one.name;
            }
            if(i == 1){
                buttons[i].textContent = nonhubPorts.two.name;
            }
            if(i == 2){
                buttons[i].textContent = nonhubPorts.three.name;
            }
            if(i == 3){
                buttons[i].textContent = nonhubPorts.four.name;
            }
        }
        sizeChosen = !sizeChosen;
    }
    else{
        console.log("Awaiting Changes")
    }
    
});

buttons[1].addEventListener("click", async () => { //small hub button then second sub choice button 
    let response = await fetch('./js/airportData.json');
    let data = await response.json();
    let small = data.small;

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = small.smallTitle;

        let desc = document.querySelector("main p");
        desc.textContent = small.smallDesc;

        let smallPorts = small.smallPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = smallPorts.one.name;
            }
            if(i == 1){
                buttons[i].textContent = smallPorts.two.name;
            }
            if(i == 2){
                buttons[i].textContent = smallPorts.three.name;
            }
            if(i == 3){
                buttons[i].textContent = smallPorts.four.name;
            }
        }
        sizeChosen = !sizeChosen;
    }
    else{
        console.log("Awaiting Changes")
    }
});

buttons[2].addEventListener("click", async () => { //medium hub button then third sub choice button 
    let response = await fetch('./js/airportData.json');
    let data = await response.json();
    let medium = data.medium;

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = medium.mediumTitle;

        let desc = document.querySelector("main p");
        desc.textContent = medium.mediumDesc;

        let mediumPorts = medium.mediumPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = mediumPorts.one.name;
            }
            if(i == 1){
                buttons[i].textContent = mediumPorts.two.name;
            }
            if(i == 2){
                buttons[i].textContent = mediumPorts.three.name;
            }
            if(i == 3){
                buttons[i].textContent = mediumPorts.four.name;
            }
        }
        sizeChosen = !sizeChosen;
    }
    else{
        console.log("Awaiting Changes")
    }
});

buttons[3].addEventListener("click", async () => { //large hub button then fourth sub choice button 
    let response = await fetch('./js/airportData.json');
    let data = await response.json();
    let large = data.large;

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = large.largeTitle;

        let desc = document.querySelector("main p");
        desc.textContent = large.largeDesc;

        let largePorts = large.largePorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = largePorts.one.name;
            }
            if(i == 1){
                buttons[i].textContent = largePorts.two.name;
            }
            if(i == 2){
                buttons[i].textContent = largePorts.three.name;
            }
            if(i == 3){
                buttons[i].textContent = largePorts.four.name;
            }
        }
        sizeChosen = !sizeChosen;
    }
    else{
        console.log("Awaiting Changes")
    }
});