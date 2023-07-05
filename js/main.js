// CICLO FOR CON CONDIZIONI CONSOLE
for (let i = 1; i <= 101; i++) {
    if (i % 15 == 0) console.log("fizzbuzz");
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i);
}

// DICHIARAZIONE VARIABILI
const chessContainer = document.querySelector(".chess-container");
const totalCells = 10*25;

// CICLO FOR PER SCACCHIERA
for (let i = 1; i < totalCells; i++){
    let singleCell = `<div class="chess-square"></div>`;

    chessContainer.innerHTML + singleCell;

    singleCell = document.createElement ("div");
    singleCell.classList.add("chess-square");
    singleCell.classList.add("d-flex", "justify-content-center", "align-items-center", "bg-primary");
    singleCell.innerHTML = i.toString();

    chessContainer.append(singleCell);

    // CONDIZIONI
    if (i % 15 == 0) {
        singleCell.classList.add("bg-danger")
        singleCell.innerHTML = ("fizzbuzz")
    } else if (i % 3 == 0) {
        singleCell.classList.add("bg-warning")
        singleCell.innerHTML = ("fizz")
    } else if (i % 5 == 0) {
        singleCell.classList.add("bg-success")
        singleCell.innerHTML = ("buzz")
    }    
    
    

}