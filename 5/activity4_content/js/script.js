'use strict';

async function replaceContent(){
    let response = await fetch('./js/boardingData.json');
    let data = await response.json();

    document.title = data.title;

    let heading = document.querySelector('#styleName');
    heading.textContent = data.header;

    let headline = document.querySelector('#heroTitle');
    headline.textContent = data.hero.headline;

    let headlineDesc = document.querySelector('#heroDesc');
    headlineDesc.textContent = data.hero.description;

    let image = document.querySelector('.hero');
    image.style.setProperty('--hero-img', `url("${data.hero.image}")`);

    let sec1Title = document.querySelector('#sec1Title');
    sec1Title.textContent = data.sections.overview.title;

    let sec1Subtitle = document.querySelector('#sec1Subtitle');
    sec1Subtitle.textContent = data.sections.overview.subtitle;
    
    let sec1Cards = data.sections.overview.cards;
    let sec1Grid = (document.querySelector('#sec1Grid')).querySelectorAll('.card');
    for(let i = 0; i < sec1Cards.length; i++){
        let desc = sec1Grid[i].querySelector('p');
        desc.textContent = sec1Cards[i].description;
    }
    
    let sec2Cards = data.sections.equipment.cards;
    let sec2Grid = (document.querySelector('#sec2Grid')).querySelectorAll('.card');
    for(let i = 0; i < sec2Cards.length; i++){
        let heading = sec2Grid[i].querySelector('h3');
        let desc = sec2Grid[i].querySelector('p');

        heading.textContent = sec2Cards[i].title;
        desc.textContent = sec2Cards[i].description;
    }



}

let changeButton = document.querySelector('.btn-change');

changeButton.addEventListener("click", replaceContent);

