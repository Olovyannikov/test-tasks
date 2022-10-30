let priceIndicatorFirst = document.querySelector('.table__indicator--first');
let priceIndicatorSecond = document.querySelector('.table__indicator--second');
let priceIndicatorThird = document.querySelector('.table__indicator--third');
let priceTable = document.querySelector('.table');

priceIndicatorFirst.onclick = function () {
    priceIndicatorFirst.classList.add('active');
    priceIndicatorSecond.classList.remove('active');
    priceIndicatorThird.classList.remove('active');
    priceTable.classList.add('first-table');
    priceTable.classList.remove('second-table');
    priceTable.classList.remove('third-table');
}

priceIndicatorSecond.onclick = function () {
    priceIndicatorSecond.classList.add('active');
    priceIndicatorFirst.classList.remove('active');
    priceIndicatorThird.classList.remove('active');
    priceTable.classList.add('second-table');
    priceTable.classList.remove('first-table');
    priceTable.classList.remove('third-table');
}

priceIndicatorThird.onclick = function () {
    priceIndicatorThird.classList.add('active');
    priceIndicatorSecond.classList.remove('active');
    priceIndicatorFirst.classList.remove('active');
    priceTable.classList.add('third-table');
    priceTable.classList.remove('second-table');
    priceTable.classList.remove('first-table');
}