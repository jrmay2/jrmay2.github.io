'use strict';

import { db } from "./firebase.js";
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore-lite.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyxaszGW2VDLQTuj0aJYzqJK7vca4HUno",
    authDomain: "csci-3054-project.firebaseapp.com",
    projectId: "csci-3054-project",
    storageBucket: "csci-3054-project.firebasestorage.app",
    messagingSenderId: "1054522318125",
    appId: "1:1054522318125:web:6b01b8dde65c23e7e747a4"
};

let sizeChosen = false;
let nonhubChoice = false;
let smallChoice = false;
let mediumChoice = false;
let largeChoice = false;

//thinking of having many booleans to aid logic for how to show airport details. add bool for each size
//  if sizechosen == true, display details according to what size bool is true
const nonhub = await getDoc(doc(db, "airportData", "nonhub"));
const small = await getDoc(doc(db, "airportData", "small"));
const medium = await getDoc(doc(db, "airportData", "medium"));
const large = await getDoc(doc(db, "airportData", "large"));

const nonhubData = nonhub.data();
const smallData = small.data();
const mediumData = medium.data();
const largeData = large.data();
let buttons = document.querySelectorAll(".step-1-item div");
buttons[0].addEventListener("click", async () => { //nonhub button then first sub choice button
    

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = nonhubData.nonhubTitle;

        let desc = document.querySelector("main p");
        desc.textContent = nonhubData.nonhubDesc;

        let nonhubPorts = nonhubData.nonhubPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = nonhubPorts[i].name;
            }
            if(i == 1){
                buttons[i].textContent = nonhubPorts[i].name;
            }
            if(i == 2){
                buttons[i].textContent = nonhubPorts[i].name;
            }
            if(i == 3){
                buttons[i].textContent = nonhubPorts[i].name;
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
            heading.textContent = nonhubData.nonhubPorts[0].name;
            image.setAttribute("src", nonhubData.nonhubPorts[0].image);
            image.setAttribute("alt", nonhubData.nonhubPorts[0].name);
            imgDesc.textContent = nonhubData.nonhubPorts[0].imageDesc;
            info1.textContent = nonhubData.nonhubPorts[0].portInfo1;
            info2.textContent = nonhubData.nonhubPorts[0].portInfo2;
        }else if(smallChoice){
            heading.textContent = smallData.smallPorts[0].name;
            image.setAttribute("src", smallData.smallPorts[0].image);
            image.setAttribute("alt", smallData.smallPorts[0].name);
            imgDesc.textContent = smallData.smallPorts[0].imageDesc;
            info1.textContent = smallData.smallPorts[0].portInfo1;
            info2.textContent = smallData.smallPorts[0].portInfo2;
        }else if(mediumChoice){
            heading.textContent = mediumData.mediumPorts[0].name;
            image.setAttribute("src", mediumData.mediumPorts[0].image);
            image.setAttribute("alt", mediumData.mediumPorts[0].name);
            imgDesc.textContent = mediumData.mediumPorts[0].imageDesc;
            info1.textContent = mediumData.mediumPorts[0].portInfo1;
            info2.textContent = mediumData.mediumPorts[0].portInfo2;
        }else if(largeChoice){
            heading.textContent = largeData.largePorts[0].name;
            image.setAttribute("src", largeData.largePorts[0].image);
            image.setAttribute("alt", largeData.largePorts[0].name);
            imgDesc.textContent = largeData.largePorts[0].imageDesc;
            info1.textContent = largeData.largePorts[0].portInfo1;
            info2.textContent = largeData.largePorts[0].portInfo2;
        }
    }
    
});

buttons[1].addEventListener("click", async () => { //small hub button then second sub choice button 

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = smallData.smallTitle;

        let desc = document.querySelector("main p");
        desc.textContent = smallData.smallDesc;

        let smallPorts = smallData.smallPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = smallPorts[i].name;
            }
            if(i == 1){
                buttons[i].textContent = smallPorts[i].name;
            }
            if(i == 2){
                buttons[i].textContent = smallPorts[i].name;
            }
            if(i == 3){
                buttons[i].textContent = smallPorts[i].name;
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
            heading.textContent = nonhubData.nonhubPorts[1].name;
            image.setAttribute("src", nonhubData.nonhubPorts[1].image);
            image.setAttribute("alt", nonhubData.nonhubPorts[1].name);
            imgDesc.textContent = nonhubData.nonhubPorts[1].imageDesc;
            info1.textContent = nonhubData.nonhubPorts[1].portInfo1;
            info2.textContent = nonhubData.nonhubPorts[1].portInfo2;
        }else if(smallChoice){
            heading.textContent = smallData.smallPorts[1].name;
            image.setAttribute("src", smallData.smallPorts[1].image);
            image.setAttribute("alt", smallData.smallPorts[1].name);
            imgDesc.textContent = smallData.smallPorts[1].imageDesc;
            info1.textContent = smallData.smallPorts[1].portInfo1;
            info2.textContent = smallData.smallPorts[1].portInfo2;
        }else if(mediumChoice){
            heading.textContent = mediumData.mediumPorts[1].name;
            image.setAttribute("src", mediumData.mediumPorts[1].image);
            image.setAttribute("alt", mediumData.mediumPorts[1].name);
            imgDesc.textContent = mediumData.mediumPorts[1].imageDesc;
            info1.textContent = mediumData.mediumPorts[1].portInfo1;
            info2.textContent = mediumData.mediumPorts[1].portInfo2;
        }else if(largeChoice){
            heading.textContent = largeData.largePorts[1].name;
            image.setAttribute("src", largeData.largePorts[1].image);
            image.setAttribute("alt", largeData.largePorts[1].name);
            imgDesc.textContent = largeData.largePorts[1].imageDesc;
            info1.textContent = largeData.largePorts[1].portInfo1;
            info2.textContent = largeData.largePorts[1].portInfo2;
        }
    }
});

buttons[2].addEventListener("click", async () => { //medium hub button then third sub choice button 

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = mediumData.mediumTitle;

        let desc = document.querySelector("main p");
        desc.textContent = mediumData.mediumDesc;

        let mediumPorts = mediumData.mediumPorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = mediumPorts[i].name;
            }
            if(i == 1){
                buttons[i].textContent = mediumPorts[i].name;
            }
            if(i == 2){
                buttons[i].textContent = mediumPorts[i].name;
            }
            if(i == 3){
                buttons[i].textContent = mediumPorts[i].name;
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
            heading.textContent = nonhubData.nonhubPorts[2].name;
            image.setAttribute("src", nonhubData.nonhubPorts[2].image);
            image.setAttribute("alt", nonhubData.nonhubPorts[2].name);
            imgDesc.textContent = nonhubData.nonhubPorts[2].imageDesc;
            info1.textContent = nonhubData.nonhubPorts[2].portInfo1;
            info2.textContent = nonhubData.nonhubPorts[2].portInfo2;
        }else if(smallChoice){
            heading.textContent = smallData.smallPorts[2].name;
            image.setAttribute("src", smallData.smallPorts[2].image);
            image.setAttribute("alt", smallData.smallPorts[2].name);
            imgDesc.textContent = smallData.smallPorts[2].imageDesc;
            info1.textContent = smallData.smallPorts[2].portInfo1;
            info2.textContent = smallData.smallPorts[2].portInfo2;
        }else if(mediumChoice){
            heading.textContent = mediumData.mediumPorts[2].name;
            image.setAttribute("src", mediumData.mediumPorts[2].image);
            image.setAttribute("alt", mediumData.mediumPorts[2].name);
            imgDesc.textContent = mediumData.mediumPorts[2].imageDesc;
            info1.textContent = mediumData.mediumPorts[2].portInfo1;
            info2.textContent = mediumData.mediumPorts[2].portInfo2;
        }else if(largeChoice){
            heading.textContent = largeData.largePorts[2].name;
            image.setAttribute("src", largeData.largePorts[2].image);
            image.setAttribute("alt", largeData.largePorts[2].name);
            imgDesc.textContent = largeData.largePorts[2].imageDesc;
            info1.textContent = largeData.largePorts[2].portInfo1;
            info2.textContent = largeData.largePorts[2].portInfo2;
        }
    }
});

buttons[3].addEventListener("click", async () => { //large hub button then fourth sub choice button 

    if(!sizeChosen){
        let heading = document.querySelector("h2");
        heading.textContent = largeData.largeTitle;

        let desc = document.querySelector("main p");
        desc.textContent = largeData.largeDesc;

        let largePorts = largeData.largePorts;
        for(let i = 0; i < buttons.length; i++){
            if(i == 0){
                buttons[i].textContent = largePorts[i].name;
            }
            if(i == 1){
                buttons[i].textContent = largePorts[i].name;
            }
            if(i == 2){
                buttons[i].textContent = largePorts[i].name;
            }
            if(i == 3){
                buttons[i].textContent = largePorts[i].name;
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
            heading.textContent = nonhubData.nonhubPorts[3].name;
            image.setAttribute("src", nonhubData.nonhubPorts[3].image);
            image.setAttribute("alt", nonhubData.nonhubPorts[3].name);
            imgDesc.textContent = nonhubData.nonhubPorts[3].imageDesc;
            info1.textContent = nonhubData.nonhubPorts[3].portInfo1;
            info2.textContent = nonhubData.nonhubPorts[3].portInfo2;
        }else if(smallChoice){
            heading.textContent = smallData.smallPorts[3].name;
            image.setAttribute("src", smallData.smallPorts[3].image);
            image.setAttribute("alt", smallData.smallPorts[3].name);
            imgDesc.textContent = smallData.smallPorts[3].imageDesc;
            info1.textContent = smallData.smallPorts[3].portInfo1;
            info2.textContent = smallData.smallPorts[3].portInfo2;
        }else if(mediumChoice){
            heading.textContent = mediumData.mediumPorts[3].name;
            image.setAttribute("src", mediumData.mediumPorts[3].image);
            image.setAttribute("alt", mediumData.mediumPorts[3].name);
            imgDesc.textContent = mediumData.mediumPorts[3].imageDesc;
            info1.textContent = mediumData.mediumPorts[3].portInfo1;
            info2.textContent = mediumData.mediumPorts[3].portInfo2;
        }else if(largeChoice){
            heading.textContent = largeData.largePorts[3].name;
            image.setAttribute("src", largeData.largePorts[3].image);
            image.setAttribute("alt", largeData.largePorts[3].name);
            imgDesc.textContent = largeData.largePorts[3].imageDesc;
            info1.textContent = largeData.largePorts[3].portInfo1;
            info2.textContent = largeData.largePorts[3].portInfo2;
        }
        }
    }
);