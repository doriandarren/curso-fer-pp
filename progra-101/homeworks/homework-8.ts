

export function largestNameOfArray(nameAray: string[]){

    let largestName = '';

    for(let i = 0; i < nameAray.length; i++){

        let name = nameAray[i];

        if(name.length > largestName.length){
            largestName = name;
        }

    }

    return largestName;
}




let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let hero = largestNameOfArray(heroes);

console.log(hero);