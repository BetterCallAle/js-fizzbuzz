//Estraggo elementi dal DOM
const row = document.querySelector(".row")
console.log(row);
const userNumber = document.getElementById("user-number");
console.log(userNumber);
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
const cancelBtn = document.getElementById("cancel")
console.log(cancel);
const errorAdvice =  document.getElementById("error");
console.log(errorAdvice);

submitBtn.addEventListener("click", function() {
    //ripulisco la row
    row.innerHTML = ""

    //esporto il value dell'input
    const userNumberValue = parseInt(userNumber.value)
    console.log(userNumberValue);

    //Scrivo un ciclo che vada da 1 a 100
    for (let i = 1; i <= userNumberValue; i++){

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

        //creo l'elemento HTML con le sue classi
        const col = document.createElement("div");
        col.classList.add("col");
        col.classList.add(classItem)
        col.innerHTML = fizzBuzz;
        row.append(col);
    }

    //ripulisco l'input
    userNumber.value = ""
            
    
})

cancelBtn.addEventListener("click", function() {
    row.innerHTML = ""
    userNumber.value = ""
    errorAdvice.classList.add("hidden")
})


