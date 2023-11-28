/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Nancy Stoddart',
    photo: 'images/nancyStoddart.jpeg',
    favoriteFoods: ['Pizza', 'Nachos', 'Taco Salad', 'French Fries'],
    hobbies: ['reading', 'dancing', 'crocheting', 'hallmark movie watching'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Farmington, Utah',
        length: '4 years'
}
)

myProfile.placesLived.push(
    {
        place: 'Colorado Springs, Colorado',
        length: '4 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Salt Lake City, Utah',
        length: '2 years 9 months'
    }
)

myProfile.placesLived.push(
    {
        place: 'Woods Cross, Utah',
        length: '2 years'
    }
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(one => {
    let dt = document.createElement('dt');
    dt.textContent = one.place;
    let dd = document.createElement('dd');
    dd.textContent = one.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

