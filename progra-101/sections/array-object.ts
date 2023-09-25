
export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}





let dorian: Person = {
    name: 'Dorian',
    age: 39,
    isActive: false
}


let milena: Person = {
    name: 'Milena',
    age: 41,
    isActive: false
}



let chop: Person = {
    name: 'ChopPerro',
    age: 12,
    isActive: false
}


let peoples = [dorian, milena, chop];

console.log(peoples);



for(let i = 0; i < peoples.length; i++){
    let person = peoples[i];
    console.log( person.name + ' ' + person.age );
}

