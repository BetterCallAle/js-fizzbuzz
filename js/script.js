//Scrivo un ciclo che vada da 1 a 100
for (let i = 1; i <= 100; i++){

    //SE un numero è multiplo di 3
        //la scritta sarà FIZZ
    //ALTRIMENTI SE un numero è multiplo di 5
        //la scritta sarà BUZZ
    let fizzBuzz = i
    if (i % 3 === 0) {
        fizzBuzz="FIZZ"
    } else if (i % 5 === 0) {
        fizzBuzz ="BUZZ"
    }

    //SE il numero è sia divisibile per 3 che per 5
        //la scritta sarà FIZZBUZZ
    if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzz="FIZZBUZZ"
    }

    console.log(i, fizzBuzz);
}