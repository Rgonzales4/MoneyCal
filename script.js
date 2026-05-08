let floatTotal = 600;

function setFloat(value) {
  floatTotal = value;

  document
    .getElementById("float-tab-500")
    .classList.toggle("active", value === 500);
  document
    .getElementById("float-tab-600")
    .classList.toggle("active", value === 600);

  document.getElementById("cashProfitSub").innerHTML =
    "(Excluding $" + value + " float in Till)";
}

// Evaluate the numbers
function solve() {
  let hundredsTotal = document.getElementById("hundreds").value * 100;
  let fiftiesTotal = document.getElementById("fifties").value * 50;
  let twentiesTotal = document.getElementById("twenties").value * 20;
  let tensTotal = document.getElementById("tens").value * 10;
  let fivesTotal = document.getElementById("fives").value * 5;
  let twosTotal = document.getElementById("twos").value * 2;
  let onesTotal = document.getElementById("ones").value * 1;
  let fiftyCentsTotal = document.getElementById("fiftyCents").value * 0.5;
  let twentyCentsTotal = document.getElementById("twentyCents").value * 0.2;
  let tenCentsTotal = document.getElementById("tenCents").value * 0.1;
  let fiveCentsTotal = document.getElementById("fiveCents").value * 0.05;
  let eftposTotal = document.getElementById("eftpos").value * 1;
  let pettyTotal = document.getElementById("petty").value * 1;
  let finalTotal =
    hundredsTotal +
    fiftiesTotal +
    twentiesTotal +
    tensTotal +
    fivesTotal +
    twosTotal +
    onesTotal +
    fiftyCentsTotal +
    twentyCentsTotal +
    tenCentsTotal +
    fiveCentsTotal +
    eftposTotal +
    pettyTotal;
  // Subtract the float that always stays in the till (500 or 600)
  let cashTotal = finalTotal - eftposTotal - pettyTotal - floatTotal;
  document.getElementById("totalText").innerHTML =
    "$" + finalTotal.toFixed(2);
  document.getElementById("eftposValue").innerHTML =
    "$" + eftposTotal.toFixed(2);
  document.getElementById("pettyValue").innerHTML =
    "$" + pettyTotal.toFixed(2);
  document.getElementById("cashProfit").innerHTML =
    "$" + cashTotal.toFixed(2);
  document.getElementById("breakdownTotal").innerHTML =
    "$" + (eftposTotal + pettyTotal + cashTotal).toFixed(2);
}

// Prevent letters in input
function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

// Individual total for each Note and Coin values
function individualTotal(from, to, number) {
  document.getElementById(to).innerHTML =
    "$" + (document.getElementById(from).value * number).toFixed(2);
}
