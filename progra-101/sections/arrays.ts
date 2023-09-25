export let salaries: number[] = [1500, 2400, 3200];
export let employees: string[] = ['Fernando', 'Melissa', 'Eduardo'];

// Fernando tiene un salario de 1500
// Melissa tiene un salario de 2400

for( let i = 0; i <= employees.length - 1; i++ ) {
    let employee = employees[i];
    let salary = salaries[i];
    console.log( employee + ' tiene un salario de '+ salary);
} 