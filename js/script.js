//Estraggo elementi dal DOM
const row = document.querySelector(".row")
console.log(row);

//Scrivo un ciclo che vada da 1 a 100
for (let i = 1; i <= 100; i++){

    //SE un numero è multiplo di 3
        //la scritta sarà FIZZ
    //ALTRIMENTI SE un numero è multiplo di 5
        //la scritta sarà BUZZ
    let fizzBuzz = i
    let classItem = "normal-number" 

    if (i % 3 === 0) {
        fizzBuzz = "FIZZ";
        classItem = "fizz"
    } else if (i % 5 === 0) {
        fizzBuzz = "BUZZ";
        classItem = "buzz"
    }

    //SE il numero è sia divisibile per 3 che per 5
        //la scritta sarà FIZZBUZZ
    if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzz= "FIZZ BUZZ";
        classItem = "fizz-buzz"
    }

    console.log(fizzBuzz);
    const col = document.createElement("div");
    console.log(col);
    col.classList.add("col");
    col.classList.add(classItem)
    console.log(col);
    col.innerHTML = fizzBuzz;
    row.append(col)
}