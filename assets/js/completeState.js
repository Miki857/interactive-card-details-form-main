function completeState(){
    document.querySelector(".completeState").classList.toggle("hidden");

    let name = document.getElementById("Cardholder_Name").value;
    let cardNumber = document.getElementById("Card_Number").value;
    let cardMonth = document.getElementById("Exp_Date_Month").value;
    let cardYear = document.getElementById("Exp_Date_Year").value;
    let cardCVC = document.getElementById("CVC").value;

    document.querySelector(".card3D").textContent = cardCVC;
    document.querySelector(".cardNmb").textContent = cardNumber;
    document.querySelector(".cardName").textContent = name;
    document.querySelector(".cardDate").textContent = cardMonth + "/" + cardYear;
}

function continueState(){
    document.querySelector(".completeState").classList.toggle("hidden");

    document.getElementById("Cardholder_Name").value = "";
    document.getElementById("Card_Number").value = "";
    document.getElementById("Exp_Date_Month").value = undefined;
    document.getElementById("Exp_Date_Year").value = undefined;
    document.getElementById("CVC").value = "";

    document.querySelector(".card3D").textContent = "000";
    document.querySelector(".cardNmb").textContent = "0000 0000 0000 0000";
    document.querySelector(".cardName").textContent = "Your Name";
    document.querySelector(".cardDate").textContent = "00/00";
}