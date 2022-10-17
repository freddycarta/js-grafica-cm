console.log('hi');

const playButtonEl = document.querySelector('.play-button')
const gridElement = document.querySelector('.grid')
playButtonEl.addEventListener('click',creaGriglia)

function creaGriglia() {
    // reset
    resetGame()
    // genero la griglia
    console.log('creo griglia')
    //ciclare 100 volte per creare 100 celle con numeri
    for(let i = 0; i < 100; i++) {
        // console.log('cella n: ', i + 1)
        const cella = creaCella()
        cella.innerHTML = i+1
        gridElement.append(cella)
    }

}


function creaCella() {
    // creo elemento del dom e aggiungo classe cella
    const el = document.createElement('div')
    el.classList.add('cella')
    // aggiungo listener al click
    el.addEventListener('click',onClick)

    return el
}

function onClick() {
    console.log(this)
    this.classList.add('clicked')
}

function resetGame() {
    // svuoto la griglia
    gridElement.innerHTML = ''
}
