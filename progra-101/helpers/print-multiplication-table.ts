

// import { printMultiplicationTable } from "./helpers/print-multiplication-table";
// printMultiplicationTable(5, 15);


export function printMultiplicationTable(base: number, limit: number = 10){

    if(limit <= 0){
        throw new Error('El limite debe ser mayor a cero');
    }


    for(let i = 1; i <= limit; i++){
        console.log(base, ' x ' + i + ' = ', base * i );
    }
}