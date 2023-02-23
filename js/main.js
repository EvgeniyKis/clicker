var myScore = 0;
var myMoneyClick = 1;
var MyMoneyNoClick = 0;
var price1 = 50;
var price2 = 100;

function clicks(element1){
    myScore += myMoneyClick;
    element1.innerHTML = "Счёт:<br>" + myScore;
}

function funcMoneyClick(element1, element2, element3){
    if (myScore >= price1){
        myScore -= price1
        element3.innerHTML = "Счёт:<br>" + myScore;
        myMoneyClick += 1;
        price1 *= 2
        element1.innerHTML = "Денег<br>за клик:<br>" + myMoneyClick;
        element2.innerHTML = "+1 за клик<br>(цена: " + price1 + ")";
    }
}

function funcMoneyNoClick(element1, element2, element3){
    if (myScore >= price2){
        myScore -= price2
        MyMoneyNoClick += 1;
        element3.innerHTML = "Счёт:<br>" + myScore;
        price2 *= 2
        element1.innerHTML = "Пассивный<br>доход:<br>" + MyMoneyNoClick;
        element2.innerHTML = "+1 к пассивному доходу<br>(цена: " + price2 + ")";
        var interval = setInterval(()=>{
            myScore += MyMoneyNoClick
            element3.innerHTML = "Счёт:<br>" + myScore;
        }, 1000)
    }
    if (MyMoneyNoClick >= 2){
        clearInterval(interval);
    }
}
