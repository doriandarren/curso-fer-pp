

export let weekDay: number = -5; // 1=Lunes, 2=Martes, 3=Miercoles


if(weekDay <=0){
    //console.log('Día de la semana no permitido');
    throw new Error('Día de la semana no permitido');

}


switch(weekDay) {
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miércoles');
        break;

    default:
        console.log('No es ningún dia');
        break;
}