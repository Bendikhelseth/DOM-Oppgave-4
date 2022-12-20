function getNumber() {
    let numberlist = 0;
    let count = 1;
    let mittnummer = document.querySelector('#input1').value;

    while (mittnummer > count) {
        if (mittnummer % count == 0) {
            numberlist += count
        } count += 1;
    }
    document.querySelector('#input1').value = ""
    if (numberlist == mittnummer) {
        document.querySelector('#result').innerHTML =
            `Nummer ${mittnummer} er perfekt!`
    } else {
        document.querySelector('#result').innerHTML =
            `Nummer ${mittnummer} er ikke perfekt!`
    }
}

const knapp1 = document.querySelector('#btn1')

knapp1.addEventListener('click', function () {
    getNumber()
})



function randomNumber() {
    let numberlist = 0;
    let count = 1;
    const tilfeldigTall = Math.round(Math.random() * (100 - 0) + 0)

    while (tilfeldigTall > count) {
        if (tilfeldigTall % count == 0) {
            numberlist += count
        } count += 1;
    }
    document.querySelector('#input1').value = ""
    if (numberlist == tilfeldigTall) {
        document.querySelector('#result').innerHTML =
            `Nummer ${tilfeldigTall} er perfekt!`
    } else {
        document.querySelector('#result').innerHTML =
            `Nummer ${tilfeldigTall} er ikke perfekt!`
    }
}

const knapp2 = document.querySelector('#btn2')

knapp2.addEventListener('click', function () {
    randomNumber()
})

let colorBox = document.querySelector('#farge')

colorBox.addEventListener('input', function () {
    let farge = colorBox.value
    document.body.style.backgroundColor = farge;
})



document.getElementById("bytter1").oninput = function () {
    let farge1 = document.querySelector('#bytter1').value;
    let farge2 = document.querySelector('#bytter2').value;
    let farge3 = document.querySelector('#bytter3').value;
    document.body.style.backgroundColor = `rgb(${farge1},${farge2},${farge3})`
};

document.getElementById("bytter2").oninput = function () {
    let farge1 = document.querySelector('#bytter1').value;
    let farge2 = document.querySelector('#bytter2').value;
    let farge3 = document.querySelector('#bytter3').value;
    document.body.style.backgroundColor = `rgb(${farge1},${farge2},${farge3})`
};

document.getElementById("bytter3").oninput = function () {
    let farge1 = document.querySelector('#bytter1').value;
    let farge2 = document.querySelector('#bytter2').value;
    let farge3 = document.querySelector('#bytter3').value;
    document.body.style.backgroundColor = `rgb(${farge1},${farge2},${farge3})`
};



