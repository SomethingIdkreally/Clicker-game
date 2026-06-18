let clickPower = 1;
let autoIncome = 0;

function getMoney() {
    return document.getElementById("Money");
}

function popMoney() {
    let Money = getMoney();
    Money.classList.remove("pop");
    void Money.offsetWidth;
    Money.classList.add("pop");
}

function saveGame() {
    localStorage.setItem("money", getMoney().innerHTML);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("autoIncome", autoIncome);
}

function loadGame() {
    let money = localStorage.getItem("money");
    let cp = localStorage.getItem("clickPower");
    let ai = localStorage.getItem("autoIncome");

    if (money !== null) getMoney().innerHTML = money;
    if (cp !== null) clickPower = parseInt(cp);
    if (ai !== null) autoIncome = parseInt(ai);
}

function clickButton() {
    let Money = getMoney();
    Money.innerHTML = parseInt(Money.innerHTML) + clickPower;
    popMoney();
    saveGame();
}

function Upgrade1() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 100) {
        Money.innerHTML = parseInt(Money.innerHTML) - 100;
        clickPower += 5;
        popMoney();
        saveGame();
    }
}

function Upgrade2() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 5000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 5000;
        clickPower += 100;
        popMoney();
        saveGame();
    }
}

function Upgrade3() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 10000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 10000;
        clickPower += 500;
        popMoney();
        saveGame();
    }
}

function Upgrade4() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 500000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 500000;
        clickPower += 10000;
        popMoney();
        saveGame();
    }
}

function Upgrade5() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 1000000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 1000000;
        clickPower += 50000;
        popMoney();
        saveGame();
    }
}

function Upgrade6() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 5000000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 5000000;
        clickPower += 100000;
        popMoney();
        saveGame();
    }
}

function Upgrade11() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 1000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 1000;
        autoIncome += 5;
        popMoney();
        saveGame();
    }
}

function Upgrade22() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 50000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 50000;
        autoIncome += 100;
        popMoney();
        saveGame();
    }
}

function Upgrade33() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 100000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 100000;
        autoIncome += 500;
        popMoney();
        saveGame();
    }
}

function Upgrade44() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 5000000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 5000000;
        autoIncome += 10000;
        popMoney();
        saveGame();
    }
}

function Upgrade55() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 10000000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 10000000;
        autoIncome += 50000;
        popMoney();
        saveGame();
    }
}

function Upgrade66() {
    let Money = getMoney();
    if (parseInt(Money.innerHTML) >= 500000000) {
        Money.innerHTML = parseInt(Money.innerHTML) - 500000000;
        autoIncome += 100000;
        popMoney();
        saveGame();
    }
}

setInterval(() => {
    let Money = getMoney();
    Money.innerHTML = parseInt(Money.innerHTML) + autoIncome;

    if (autoIncome > 0) popMoney();

    saveGame();
}, 1000);

loadGame();
