/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = temple.templeName;
        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(image);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    
}


/* reset Function */

reset = function () {

    templesElement.replaceChildren();

}


/* sortBy Function */

sortBy = function (temples) {

    reset();
    filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah") === false));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 1, 1)));
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}

document.querySelector('#sortBy').addEventListener("change", () => {sortBy(templeList)});

getTemples();

/* Event Listener */
