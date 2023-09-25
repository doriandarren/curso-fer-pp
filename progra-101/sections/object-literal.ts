
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toStrign(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
}


//console.log(person.name.toUpperCase());
// person.toStrign();


let car = {
    doors: 5,
    brand: 'Honda',
    color: 'White',
    year: 2025,
    gearBox: 'manual',
}


let smartTv = {
    sizeInches: 90,
    brand: 'Sansung',
    year: 2015,
    type: 'Led'
}


let youtubeVideo = {
    lengthMin: 1.5,
    author: 'Dorian',
    comments: ['Buen video', 'Me gistó mucho', 'El peor video de todos'],
    likes: 1500,
    dislikes: 100,
}




console.log(car);
console.log(smartTv);
console.log(youtubeVideo);

