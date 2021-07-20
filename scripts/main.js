
var tipPercent = 0;
var tipAmount = 0;
var total = 0;


function tipPercentage(percentage) {
    tipPercent = percentage / 100;
}

function tipOutput(tipAmount) {
    document.getElementById("tip-output").innerHTML = tipAmount;

}

function totalOutput(total) {
    document.getElementById("total-output").innerHTML = total;
}

function reset() {
    var bill = document.getElementById('bill').value;
    var people = document.getElementById('n-of-people').value;
    tipAmount = bill / people * tipPercent;
    tipOutput(tipAmount);
    total = bill / people + tipAmount;
    totalOutput(total);
}








