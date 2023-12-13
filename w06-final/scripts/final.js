

/* Declare and initialize global variables */
const talkElement = document.querySelector('#talks');

let talkList = [];

/* async displayTemples Function */

const displayTalks = (talks) => {
    talks.forEach(talk =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = talk.title;
        let h4 = document.createElement('h4');
        h4.innerHTML = talk.speaker;
        let a = document.createElement('a');
        a.href = talk.url;
        let image = document.createElement('img');
        image.src = talk.imageurl;
        image.alt = talk.session;
        a.appendChild(image);
        article.appendChild(h3);
        article.appendChild(a);
        article.appendChild(h4);
        talkElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTalks = async () => {

    const response = await fetch ("scripts/final.json");
    talkList = await response.json();
    displayTalks(talkList);
    
}


/* reset Function */

reset = function () {

    talkElement.replaceChildren();

}



 /* nonmutating sort function*/
 function nonMutatingSort(arr) {

    let sortedArray = [].concat(arr).sort((a, b) => a.lname.localeCompare(b.lname));

    return sortedArray;
 }

/* sortBy Function */

sortBy = function (talks) {

    reset();
    filter = document.querySelector('#sortIt').value;
    ftitle = document.querySelector('#filtertitle');

    switch (filter) {
        case "satmorn":
            ftitle.innerHTML = "Saturday Morning Session";
            displayTalks(talks.filter(talk => talk.session === "Sat Morn"));
            break;
        case "sataft":
            ftitle.innerHTML = "Saturday Afternoon Session";
            displayTalks(talks.filter(talk => talk.session === "Sat Aft"));
            break;
        case "sateve":
            ftitle.innerHTML = "Saturday Evening Session";
            displayTalks(talks.filter(talk => talk.session === "Sat Eve"));
            break;
        case "sunmorn":
            ftitle.innerHTML = "Sunday Morning Session";
            displayTalks(talks.filter(talk => talk.session === "Sun Morn"));
            break;
        case "sunaft":
            ftitle.innerHTML = "Sunday Afternoon Session";
            displayTalks(talks.filter(talk => talk.session === 'Sun Aft'));
            break;
        case "speaker":
            ftitle.innerHTML = "Speakers";
            let sortedArray = nonMutatingSort(talks);
            displayTalks(sortedArray);
            break;
        case "all":
            ftitle.innerHTML = "All Talks";
            displayTalks(talks);
            break;
    }
}

document.querySelector('#sortIt').addEventListener("change", () => {sortBy(talkList)});

getTalks();

/* Event Listener */
