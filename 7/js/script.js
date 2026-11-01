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
let nonhubChoice = false;
let smallChoice = false;
let mediumChoice = false;
let largeChoice = false;

//thinking of having many booleans to aid logic for how to show airport details. add bool for each size
//  if sizechosen == true, display details according to what size bool is true
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
        nonhubChoice = !nonhubChoice;
    }else if(sizeChosen){
        let stepMain = document.querySelector("main");
        stepMain.classList.add("step-2-info-main");
        stepMain.classList.remove("step-1-main");
        stepMain.replaceChildren();

        stepMain.append(document.createElement("h2"));
        let heading = document.querySelector(".step-2-info-main h2");

        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("img-div");
        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("info-div");

        let imgDiv = document.querySelector(".img-div");
        imgDiv.append(document.createElement("img"));
        imgDiv.append(document.createElement("h3"));
        let image = document.querySelector(".img-div img");
        let imgDesc = document.querySelector(".img-div h3");

        let infoDiv = document.querySelector(".info-div");
        infoDiv.append(document.createElement("p"));
        infoDiv.append(document.createElement("p"));
        let info1 = infoDiv.firstChild;
        let info2 = infoDiv.lastChild;



        if(nonhubChoice){
            heading.textContent = nonhub.nonhubPorts.one.name;
            image.setAttribute("src", nonhub.nonhubPorts.one.image);
            image.setAttribute("alt", nonhub.nonhubPorts.one.name);
            imgDesc.textContent = nonhub.nonhubPorts.one.imageDesc;
            info1.textContent = nonhub.nonhubPorts.one.portInfo1;
            info2.textContent = nonhub.nonhubPorts.one.portInfo2;
        }else if(smallChoice){
            heading.textContent = data.small.smallPorts.one.name;
            image.setAttribute("src", data.small.smallPorts.one.image);
            image.setAttribute("alt", data.small.smallPorts.one.name);
            imgDesc.textContent = data.small.smallPorts.one.imageDesc;
            info1.textContent = data.small.smallPorts.one.portInfo1;
            info2.textContent = data.small.smallPorts.one.portInfo2;
        }else if(mediumChoice){
            heading.textContent = data.medium.mediumPorts.one.name;
            image.setAttribute("src", data.medium.mediumPorts.one.image);
            image.setAttribute("alt", data.medium.mediumPorts.one.name);
            imgDesc.textContent = data.medium.mediumPorts.one.imageDesc;
            info1.textContent = data.medium.mediumPorts.one.portInfo1;
            info2.textContent = data.medium.mediumPorts.one.portInfo2;
        }else if(largeChoice){
            heading.textContent = data.large.largePorts.one.name;
            image.setAttribute("src", data.large.largePorts.one.image);
            image.setAttribute("alt", data.large.largePorts.one.name);
            imgDesc.textContent = data.large.largePorts.one.imageDesc;
            info1.textContent = data.large.largePorts.one.portInfo1;
            info2.textContent = data.large.largePorts.one.portInfo2;
        }
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
        smallChoice = !smallChoice;
    }else if(sizeChosen){
        let stepMain = document.querySelector("main");
        stepMain.classList.add("step-2-info-main");
        stepMain.classList.remove("step-1-main");
        stepMain.replaceChildren();

        stepMain.append(document.createElement("h2"));
        let heading = document.querySelector(".step-2-info-main h2");

        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("img-div");
        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("info-div");

        let imgDiv = document.querySelector(".img-div");
        imgDiv.append(document.createElement("img"));
        imgDiv.append(document.createElement("h3"));
        let image = document.querySelector(".img-div img");
        let imgDesc = document.querySelector(".img-div h3");

        let infoDiv = document.querySelector(".info-div");
        infoDiv.append(document.createElement("p"));
        infoDiv.append(document.createElement("p"));
        let info1 = infoDiv.firstChild;
        let info2 = infoDiv.lastChild;



        if(nonhubChoice){
            heading.textContent = data.nonhub.nonhubPorts.two.name;
            image.setAttribute("src", data.nonhub.nonhubPorts.two.image);
            image.setAttribute("alt", data.nonhub.nonhubPorts.two.name);
            imgDesc.textContent = data.nonhub.nonhubPorts.two.imageDesc;
            info1.textContent = data.nonhub.nonhubPorts.two.portInfo1;
            info2.textContent = data.nonhub.nonhubPorts.two.portInfo2;
        }else if(smallChoice){
            heading.textContent = small.smallPorts.two.name;
            image.setAttribute("src", small.smallPorts.two.image);
            image.setAttribute("alt", small.smallPorts.two.name);
            imgDesc.textContent = small.smallPorts.two.imageDesc;
            info1.textContent = small.smallPorts.two.portInfo1;
            info2.textContent = small.smallPorts.two.portInfo2;
        }else if(mediumChoice){
            heading.textContent = data.medium.mediumPorts.two.name;
            image.setAttribute("src", data.medium.mediumPorts.two.image);
            image.setAttribute("alt", data.medium.mediumPorts.two.name);
            imgDesc.textContent = data.medium.mediumPorts.two.imageDesc;
            info1.textContent = data.medium.mediumPorts.two.portInfo1;
            info2.textContent = data.medium.mediumPorts.two.portInfo2;
        }else if(largeChoice){
            heading.textContent = data.large.largePorts.two.name;
            image.setAttribute("src", data.large.largePorts.two.image);
            image.setAttribute("alt", data.large.largePorts.two.name);
            imgDesc.textContent = data.large.largePorts.two.imageDesc;
            info1.textContent = data.large.largePorts.two.portInfo1;
            info2.textContent = data.large.largePorts.two.portInfo2;
        }
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
        mediumChoice = !mediumChoice;
    }else if(sizeChosen){
        let stepMain = document.querySelector("main");
        stepMain.classList.add("step-2-info-main");
        stepMain.classList.remove("step-1-main");
        stepMain.replaceChildren();

        stepMain.append(document.createElement("h2"));
        let heading = document.querySelector(".step-2-info-main h2");

        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("img-div");
        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("info-div");

        let imgDiv = document.querySelector(".img-div");
        imgDiv.append(document.createElement("img"));
        imgDiv.append(document.createElement("h3"));
        let image = document.querySelector(".img-div img");
        let imgDesc = document.querySelector(".img-div h3");

        let infoDiv = document.querySelector(".info-div");
        infoDiv.append(document.createElement("p"));
        infoDiv.append(document.createElement("p"));
        let info1 = infoDiv.firstChild;
        let info2 = infoDiv.lastChild;



        if(nonhubChoice){
            heading.textContent = data.nonhub.nonhubPorts.three.name;
            image.setAttribute("src", data.nonhub.nonhubPorts.three.image);
            image.setAttribute("alt", data.nonhub.nonhubPorts.three.name);
            imgDesc.textContent = data.nonhub.nonhubPorts.three.imageDesc;
            info1.textContent = data.nonhub.nonhubPorts.three.portInfo1;
            info2.textContent = data.nonhub.nonhubPorts.three.portInfo2;
        }else if(smallChoice){
            heading.textContent = data.small.smallPorts.three.name;
            image.setAttribute("src", data.small.smallPorts.three.image);
            image.setAttribute("alt", data.small.smallPorts.three.name);
            imgDesc.textContent = data.small.smallPorts.three.imageDesc;
            info1.textContent = data.small.smallPorts.three.portInfo1;
            info2.textContent = data.small.smallPorts.three.portInfo2;
        }else if(mediumChoice){
            heading.textContent = medium.mediumPorts.three.name;
            image.setAttribute("src", medium.mediumPorts.three.image);
            image.setAttribute("alt", medium.mediumPorts.three.name);
            imgDesc.textContent = medium.mediumPorts.three.imageDesc;
            info1.textContent = medium.mediumPorts.three.portInfo1;
            info2.textContent = medium.mediumPorts.three.portInfo2;
        }else if(largeChoice){
            heading.textContent = data.large.largePorts.three.name;
            image.setAttribute("src", data.large.largePorts.three.image);
            image.setAttribute("alt", data.large.largePorts.three.name);
            imgDesc.textContent = data.large.largePorts.three.imageDesc;
            info1.textContent = data.large.largePorts.three.portInfo1;
            info2.textContent = data.large.largePorts.three.portInfo2;
        }
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
        largeChoice = !largeChoice;
    }else if(sizeChosen){
        let stepMain = document.querySelector("main");
        stepMain.classList.add("step-2-info-main");
        stepMain.classList.remove("step-1-main");
        stepMain.replaceChildren();

        stepMain.append(document.createElement("h2"));
        let heading = document.querySelector(".step-2-info-main h2");

        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("img-div");
        stepMain.append(document.createElement("div"));
        stepMain.lastChild.classList.add("info-div");

        let imgDiv = document.querySelector(".img-div");
        imgDiv.append(document.createElement("img"));
        imgDiv.append(document.createElement("h3"));
        let image = document.querySelector(".img-div img");
        let imgDesc = document.querySelector(".img-div h3");

        let infoDiv = document.querySelector(".info-div");
        infoDiv.append(document.createElement("p"));
        infoDiv.append(document.createElement("p"));
        let info1 = infoDiv.firstChild;
        let info2 = infoDiv.lastChild;



        if(nonhubChoice){
            heading.textContent = data.nonhub.nonhubPorts.four.name;
            image.setAttribute("src", data.nonhub.nonhubPorts.four.image);
            image.setAttribute("alt", data.nonhub.nonhubPorts.four.name);
            imgDesc.textContent = data.nonhub.nonhubPorts.four.imageDesc;
            info1.textContent = data.nonhub.nonhubPorts.four.portInfo1;
            info2.textContent = data.nonhub.nonhubPorts.four.portInfo2;
        }else if(smallChoice){
            heading.textContent = data.small.smallPorts.four.name;
            image.setAttribute("src", data.small.smallPorts.four.image);
            image.setAttribute("alt", data.small.smallPorts.four.name);
            imgDesc.textContent = data.small.smallPorts.four.imageDesc;
            info1.textContent = data.small.smallPorts.four.portInfo1;
            info2.textContent = data.small.smallPorts.four.portInfo2;
        }else if(mediumChoice){
            heading.textContent = data.medium.mediumPorts.four.name;
            image.setAttribute("src", data.medium.mediumPorts.four.image);
            image.setAttribute("alt", data.medium.mediumPorts.four.name);
            imgDesc.textContent = data.medium.mediumPorts.four.imageDesc;
            info1.textContent = data.medium.mediumPorts.four.portInfo1;
            info2.textContent = data.medium.mediumPorts.four.portInfo2;
        }else if(largeChoice){
            heading.textContent = large.largePorts.four.name;
            image.setAttribute("src", large.largePorts.four.image);
            image.setAttribute("alt", large.largePorts.four.name);
            imgDesc.textContent = large.largePorts.four.imageDesc;
            info1.textContent = large.largePorts.four.portInfo1;
            info2.textContent = large.largePorts.four.portInfo2;
        }
    }
});