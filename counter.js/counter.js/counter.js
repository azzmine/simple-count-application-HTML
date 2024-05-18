const btnpengurangan = document.getElementById("btnpengurangan");
const btnulang = document.getElementById("btnulang");
const btnpenambahan = document.getElementById("btnpenambahan");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

btnpenambahan.onclick = function () {
    count++;
    counterLabel.textContent = count;
}

btnpengurangan.onclick = function () {
    count--;
    counterLabel.textContent = count;
}
btnulang.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
}    